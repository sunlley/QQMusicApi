const test = async () => {
  const data = {
    comm: {
      cv: 4747474,
      ct: 24,
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'yqq.json',
      needNewCode: 1,
      uin: 381502424,
      g_tk_new_20200303: 1087783003,
      g_tk: 1087783003,
    },
    req_1: {
      module: 'music.musicasset.SongFavRead',
      method: 'IsSongFanByMid',
      param: {
        v_songMid: ['0046ShV22rsmcn', '001WqhRf2ikSmu', '000WAAbe4Bmy45'],
      },
    },
    req_2: {
      module: 'music.musichallSong.PlayLyricInfo',
      method: 'GetPlayLyricInfo',
      param: { songMID: '001WqhRf2ikSmu', songID: 576354264 },
    },
    req_3: {
      method: 'GetCommentCount',
      module: 'music.globalComment.GlobalCommentRead',
      param: {
        request_list: [{ biz_type: 1, biz_id: '576354264', biz_sub_type: 0 }],
      },
    },
    req_4: {
      module: 'music.musichallAlbum.AlbumInfoServer',
      method: 'GetAlbumDetail',
      param: { albumMid: '0019SKlF3hJK6Q' },
    },
    req_5: {
      module: 'music.vkey.GetEVkey',
      method: 'GetUrl',
      param: {
        guid: '8635447920',
        songmid: ['001WqhRf2ikSmu'],
        songtype: [0],
        uin: '381502424',
        loginflag: 1,
        platform: '20',
        xcdn: 1,
      },
    },
  };
  // const hash = __sign_hash_20200305(JSON.stringify(str));
  const sign = require('qqmusic-sign');
  const axios = require('axios');
  const fs = require('fs');
  //   const hash = sign(`${data}`);
  const hash = sign(data);
  console.log(hash);
  const now = Date.now();
  const url = `https://u6.y.qq.com/cgi-bin/musics.fcg?_=${now}&sign=${hash}`;
  const headers = {
    // 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    Connection: 'keep-alive',
    // Host: 'u6.y.qq.com',
    Accept: 'application/json',
    // 'Accept-Encoding': 'gzip, deflate, br, zstd',
    // 'Accept-Language': 'zh,zh-CN;q=0.9,en;q=0.8',
    Dnt: '1',
    Origin: 'https://y.qq.com',
    Priority: 'u=1, i',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    Referer: 'https://y.qq.com/',
    Cookie:
      'RK=keHhHjreX4; ptcz=730f2006fcb539162ebd8103ad6e29c8985d60fd9b162d68510fae339dbb95db; pgv_pvid=2165075641; pac_uid=0_4N3ewXzmSfAJZ; suid=user_0_4N3ewXzmSfAJZ; _qimei_uuid42=1921a092222100fb9929c0bf8c5c1d821696503179; _qimei_fingerprint=1f1f0db4b2616bc374b5af33cfbf18f1; _qimei_h38=ca2063589929c0bf8c5c1d820300000981921a; _qimei_q36=; fqm_pvqid=ec74ff8e-49c4-4d6f-9c6f-57d6f6b9d494; ts_refer=www.google.com/; ts_uid=5018894218; psrf_qqaccess_token=B5CA28C28F4697D41088699674BE72FE; wxunionid=; psrf_qqopenid=13E0CCC6D8C4D793D7604F2C20FC4173; psrf_musickey_createtime=1746709619; psrf_qqrefresh_token=594DC292FD540DFD54F6F159B279C996; euin=oic57KnA7e-P; tmeLoginType=2; psrf_access_token_expiresAt=1751893619; wxopenid=; wxrefresh_token=; qm_keyst=Q_H_L_63k3NiJ8dSiTlIbbXlaLbYBe6RPekDo6zFz4W0vjom1XA40EN7gQoevfzCP5KSDvnWmtCR9xW60BhBUHEsLqMmw; uin=381502424; psrf_qqunionid=37AA805A6209216B8E81B735984FFA71; music_ignore_pskey=202306271436Hn@vBj; qqmusic_key=Q_H_L_63k3NiJ8dSiTlIbbXlaLbYBe6RPekDo6zFz4W0vjom1XA40EN7gQoevfzCP5KSDvnWmtCR9xW60BhBUHEsLqMmw; fqm_sessionid=038719ce-f1f8-4de2-9815-d3350555c504; pgv_info=ssid=s3833028753; ts_last=y.qq.com/n/ryqq/player',
  };
  let response = await axios.request({
    url: url,
    method: 'POST',
    headers: headers,
    data,
  });
  console.log(response.data);
  fs.writeFileSync('test.json', JSON.stringify(response.data, null, 2));
  //https://u6.y.qq.com/cgi-bin/musics.fcg?_=1746764958769&sign=zzc69ea9f5tpw6edsudgktczedhxwfx1or21s95d35c09
  //https://u.y.qq.com/cgi-bin/musics.fcg?-=getplaysongvkey6574047973093009&g_tk=1740745507&sign=zzaztgck8xaqpsxorw45ed952a339dbe91c7990f803cb9a6f1&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22req_0%22%3A%7B%22module%22%3A%22vkey.GetVkeyServer%22%2C%22method%22%3A%22CgiGetVkey%22%2C%22param%22%3A%7B%22guid%22%3A%228487932120%22%2C%22songmid%22%3A%5B%22003cGaJY10RAsX%22%5D%2C%22songtype%22%3A%5B0%5D%2C%22uin%22%3A%220%22%2C%22loginflag%22%3A1%2C%22platform%22%3A%2220%22%7D%7D%2C%22comm%22%3A%7B%22uin%22%3A0%2C%22format%22%3A%22json%22%2C%22ct%22%3A24%2C%22cv%22%3A0%7D%7D
};
// test();
const test2 = async () => {
  const data = {
    req_0: {
      module: 'vkey.GetVkeyServer',
      method: 'CgiGetVkey',
      param: {
        guid: '8487932120',
        songmid: ['001WqhRf2ikSmu','003cGaJY10RAsX'],
        songtype: [0],
        uin: '0',
        loginflag: 1,
        platform: '20',
        xcdn: 1,
      },
    },
    comm: { uin: 0, format: 'json', ct: 24, cv: 0 },
  };
  const sign = require('qqmusic-sign');
  const axios = require('axios');
  const fs = require('fs');
  const hash = sign(data);
  console.log(hash);
  const now = Date.now();
  const url = `https://u.y.qq.com/cgi-bin/musics.fcg?g_tk=1740745507&sign=${hash}&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0`;

  const headers = {
    Connection: 'keep-alive',
    // Host: 'u6.y.qq.com',
    Accept: 'application/json',
    // 'Accept-Encoding': 'gzip, deflate, br, zstd',
    // 'Accept-Language': 'zh,zh-CN;q=0.9,en;q=0.8',
    Dnt: '1',
    Origin: 'https://y.qq.com',
    Priority: 'u=1, i',
    Cookie:
      'RK=keHhHjreX4; ptcz=730f2006fcb539162ebd8103ad6e29c8985d60fd9b162d68510fae339dbb95db; pgv_pvid=2165075641; pac_uid=0_4N3ewXzmSfAJZ; suid=user_0_4N3ewXzmSfAJZ; _qimei_uuid42=1921a092222100fb9929c0bf8c5c1d821696503179; _qimei_fingerprint=1f1f0db4b2616bc374b5af33cfbf18f1; _qimei_h38=ca2063589929c0bf8c5c1d820300000981921a; _qimei_q36=; fqm_pvqid=ec74ff8e-49c4-4d6f-9c6f-57d6f6b9d494; ts_refer=www.google.com/; ts_uid=5018894218; psrf_qqaccess_token=B5CA28C28F4697D41088699674BE72FE; wxunionid=; psrf_qqopenid=13E0CCC6D8C4D793D7604F2C20FC4173; psrf_musickey_createtime=1746709619; psrf_qqrefresh_token=594DC292FD540DFD54F6F159B279C996; euin=oic57KnA7e-P; tmeLoginType=2; psrf_access_token_expiresAt=1751893619; wxopenid=; wxrefresh_token=; qm_keyst=Q_H_L_63k3NiJ8dSiTlIbbXlaLbYBe6RPekDo6zFz4W0vjom1XA40EN7gQoevfzCP5KSDvnWmtCR9xW60BhBUHEsLqMmw; uin=381502424; psrf_qqunionid=37AA805A6209216B8E81B735984FFA71; music_ignore_pskey=202306271436Hn@vBj; qqmusic_key=Q_H_L_63k3NiJ8dSiTlIbbXlaLbYBe6RPekDo6zFz4W0vjom1XA40EN7gQoevfzCP5KSDvnWmtCR9xW60BhBUHEsLqMmw; fqm_sessionid=038719ce-f1f8-4de2-9815-d3350555c504; pgv_info=ssid=s3833028753',
  };
  const response = await axios.request({
    url: `${url}&data=${encodeURIComponent(JSON.stringify(data))}`,
    method: 'GET',
    headers: headers,
    // data,
  });
  console.log(response.data);
    fs.writeFileSync('test2.json', JSON.stringify(response.data, null, 2));
    //https://ws6.stream.qqmusic.qq.com/C400003euoke1LX784.m4a?guid=8635447920&vkey=DA23F4D36A4E85F0B66E9F20F33AB8EEE76F9EB88322DF526C4FD5F2CAE41134EA8447F3883ED59B20156E77085DCA2A5C44544EEBCC7038__v2b94c5ee&uin=381502424&fromtag=120032&src=C400001ENXkR26ZLWQ.m4a
    //https://ws6.stream.qqmusic.qq.com/C4000026u3VZ3DDTMV.m4a?guid=8487932120&vkey=4F10C15A3BEC873A3B44B738966C12435861B4F731BD1B3CDCE47DCD08EDA1FCE4524015B0E961FF1AB78008FD852AF4D0E73AEE7585C357__v21e2a1874&uin=381502424&fromtag=120032&src=C4000026u3VZ3DDTMV.m4a
};
test2();
