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
clj -A:figwheel -m klipse.test-runner-ci
```