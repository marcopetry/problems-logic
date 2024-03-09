create = 'false'

for args in "$@"
    do
        echo $args
        node ../beecrowd/$arg/beecrowd-$arg.js

    done