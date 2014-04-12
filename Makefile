SCRIPT=finsert

.PHONY: all antoine james clean
all:
	./finsert index_to_compile.html -o index.html

antoine:
	./finsert index_antoine.html -o index.html

james:
	./finsert index_james.html -o index.html

clean:
	rm index.html
