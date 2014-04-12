SCRIPT=finsert

.PHONY: all antoine clean
all:
	./finsert index_to_compile.html -o index.html

clean:
	rm index.html
