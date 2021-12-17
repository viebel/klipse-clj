If you like this stuff, please consider a (small donation) on [Patreon](https://www.patreon.com/bePatron?u=18227864).


# dev
```bash
clj  -A:figwheel -C:test  --build dev --repl
```


# Tests - Auto reload
```bash
clj  -A:figwheel -C:test  --build test --repl
```


# Tests - CI

```bash
clj -A:figwheel -m klipse-clj.test-runner-ci
```
