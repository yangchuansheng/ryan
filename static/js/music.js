const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    volume: 0.3,
    loop: 'all',
    audio: [
      {
        name: "Here We Are Again",
        artist: '《喜剧之王》电影插曲',
        url: 'https://drive.yangcs.net/?/music/Here-We-Are-Again.mp3',
        cover: 'https://ws3.sinaimg.cn/large/006tNbRwgy1fwzudj5k99j303m03mdfo.jpg',
      },
      {
        name: 'Faded',
        artist: 'Iselin Solheim',
        url: 'https://drive.yangcs.net/?/music/faded.mp3',
        cover: 'https://ws4.sinaimg.cn/large/006tNbRwgy1fxb05q71q8j303m03mjr7.jpg',
      },
      {
        name: '时间煮雨',
        artist: '郁可唯',
        url: 'http://up.mcyt.net/?down/37600.mp3',
        cover: 'http://imge.kugou.com/stdmusic/20130625/20130625181709936236.jpg',
      },
      {
        name: '爱情转移',
        artist: '陈奕迅',
        url: 'http://other.web.ra01.sycdn.kuwo.cn/resource/n2/320/52/97/1397406180.mp3',
        cover: 'http://imge.kugou.com/stdmusic/20161010/20161010200518926406.jpg',
      }
    ]
});
