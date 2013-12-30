var FeedParser = require('feedparser'),
    request = require('request');

request('http://mikedominice.tumblr.com/rss')
    .pipe(new FeedParser())
    .on('error', function (error) {
        console.err(error);
    })
    .on('meta', function (meta) {
        console.log('Title: "%s"', meta.title);
        console.log('link: "%s"\n', meta.link);
    })
    .on('readable', function () {
        var stream = this,
            item = stream.read();
        while (item) {
            console.log('Item title: "%s"', item.title);
            console.log('Item date: "%s"', item.date);
            console.log('Item link: "%s"', item.link);
            console.log('Item content:\n%s', item.description);
            item = stream.read();
        }
    });