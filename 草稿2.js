let isSso = 1


const url = window.location.href
    const text = url.split('?')[1] || ''
    const purpose = getQueryValue('purpose', text)
    const code = getQueryValue('code', text)
    const extSystemCode = getQueryValue('extSystem_code', text)
    if (purpose && code && extSystemCode && isSso === 1) {
      isSso++
      // 缓存控制页面隐形的标识，其他跳转过来需要隐藏顶部和左边菜单
      sessionStorage.setItem('isIframePage', false)
      // let data = { extSystem_code: extSystemCode, code: code }
      result = await axios
        .get('/api-uaa/tokens/getByIdentifier?code=' + code)
          if (result.data.resp_code === 0) {
            sessionStorage.setItem('token', result.data.datas.access_token)
            req.headers['Authorization'] = 'Bearer ' + result.data.datas.access_token
            location.href = '#/' + purpose
          }
          return req
    }
    // token的获取
    console.log(sessionStorage)