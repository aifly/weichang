 function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return (r[2]);
        return null;
    }
    window.onload = function () {
        var searchSTR = getQueryString("src");
        if(searchSTR){
            //场景数据配置
            var sceneData = [
                {sceneId:"v1", sceneName:"智媒体", sceneFilePath:searchSTR, sceneType:"Video",isVideoPlay:false}
            ];
            //播放器初始化
            var params = {
                container:document.getElementById("showPano"),
                name: "SceneViewer",
                fullScreenMode:true,			      //全屏模式
                dragDirectionMode: true,
                dragMode: false,
                isGyro:true,        //默认开启陀螺仪功能  移动端支持陀螺仪设备有效
                scenesArr: sceneData
            };
            initLoad(params);
        }else{
            document.write("<div style='font-size: 14px;width: 100%;height:100%;'>" +
            "<div>请在地址栏后面加上src=******   .mp4 或者.m3u8 格式的视频地址</div></br>" +
            "<div>注意：该页面为H5单独的测试页面，兼容手机和pc！</div></br>" +
            "<div>点播配置：?src=http://cache.utovr.com/201508240527049953.mp4</div></br>" +
            "<div>点播配置：?src=http://cache.utovr.com/201508240527049953.m3u8</div></br>" +
            "<div>调试信息：?debug=true</div>" +
            " </div>");
        }

    };