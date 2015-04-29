BIN := ./node_modules/.bin

LIB := $(shell find lib spec/lib -type f -name "*.js")
SPEC := spec/helper.js $(shell find spec/lib -type f -name "*.js")

VERSION := $(shell node -e "console.log(require('./package.json').version)")

default: lint test

test:
	@$(BIN)/mocha --colors -R dot $(SPEC)

bdd:
	@$(BIN)/mocha --colors -R spec $(SPEC)

cover:
	@istanbul cover $(BIN)/_mocha $(SPEC) --report lcovonly -- -R spec

lint:
	@jshint $(LIB) $(SPEC)

ci: lint cover

release: lint test
	@git push origin master
	@git checkout release ; git merge master ; git push ; git checkout master
	@git tag -m "$(VERSION)" v$(VERSION)
	@git push --tags
	@npm publish ./

.PHONY: default cover test bdd lint ci release
