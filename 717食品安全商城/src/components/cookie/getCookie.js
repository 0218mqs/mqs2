let cookie = document.cookie.split(";"),
    token = null;
    cookie.forEach((val,ind) => {
        if(val.indexOf("717_shop") != -1){
          token = val.split("=")[1];
        }
    })

export default token