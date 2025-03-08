const http = require('http');
const url = require('url');

const user = [
    {
        'name': 'wscubetech',
        'email': 'ws@gmail.com',
        'phone': '7418596',
        'city': 'Jaipur'
    },
    {
        'name': 'Akash',
        'email': 'akash@gmail.com',
        'phone': '68466865',
        'city': 'kota'
    },
    {
        'name': 'Ankit',
        'email': 'ankit@gmail.com',
        'phone': '498496156',
        'city': 'delhi'
    }
]

const product = [
    {
        'name': 'product1',
        'email': 'product1@gmail.com',
        'phone': '7418596',
        'city': 'Jaipur'
    },
    {
        'name': 'product2',
        'email': 'product2@gmail.com',
        'phone': '68466865',
        'city': 'kota'
    },
    {
        'name': 'product3',
        'email': 'product3@gmail.com',
        'phone': '498496156',
        'city': 'delhi'
    }
]

const category = [
    {
        'name': 'category1',
        'email': 'category1@gmail.com',
        'phone': '7418596',
        'city': 'Jaipur'
    },
    {
        'name': 'category2',
        'email': 'category2@gmail.com',
        'phone': '68466865',
        'city': 'kota'
    },
    {
        'name': 'category3',
        'email': 'category3@gmail.com',
        'phone': '498496156',
        'city': 'delhi'
    }
]

const server = http.createServer(
    (req, res) => {

        const pareseUrl = url.parse(req.url, true)

        console.log(pareseUrl.pathname);
        if (pareseUrl.pathname == '/shop') {
            res.end(JSON.stringify(product))
        } else if (pareseUrl.pathname == '/user') {
            res.end(JSON.stringify(user))
        } else if (pareseUrl.pathname == '/category') {
            res.end(JSON.stringify(category));
        } else {
            res.end(JSON.stringify('Please enter valid URL'));
        }
    }
)

server.listen(
    5000,
    () => {
        console.log("Server started at port 5000");
    }
)

