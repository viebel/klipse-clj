If you like this stuff, please consider a (small donation) on
[Patreon](https://www.patreon.com/bePatron?u=18227864).

# dev

``` bash
clj -A:test -M:figwheel --build dev --repl
```

# Tests - Auto reload

``` bash
clj -A:test -M:figwheel --build test --repl
```

# Tests - CI

``` bash
clj -M:figwheel -m klipse-clj.test-runner-ci
```
