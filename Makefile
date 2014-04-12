SCRIPT=finsert

.PHONY: all antoine clean
all:
	finsert index_tocompile.html -o index.html

clean:
	rm index.html
