/*┏┓　　　┏┓
┏┛┻━━━┛┻┓
┃　　　　　　　┃    ***** JavaScript Document
┃　　　━　　　┃    ***** 东东
┃　┳┛　┗┳　┃    ***** 2015-10-22   Update 2015-10-22 
┃　　　　　　　┃
┃　　　┻　　　┃
┃　　　　　　　┃
┗━┓　　　┏━┛
    ┃　　　┃  神兽保佑
    ┃　　　┃  代码无BUG！
    ┃　　　┗━━━┓
    ┃　　　　　　　┣┓
    ┃　　　　　　　┏┛
    ┗┓┓┏━┳┓┏┛
      ┃┫┫　┃┫┫
      ┗┻┛　┗┻┛    */
/// <reference path="http://192.168.1.78:8080/VSReference/jquery/jquery-2.1.1-vsdoc.js" />
/** @define {boolean} */ var JSCOMPRESS_DEBUG = true;
(function () {
    //Code Start
    var NowPlace = function (data) {
        /// <summary>新建位置监听</summary>
        /// <param name="data" type="Array">对象的ID</param>
        /// <field name="NowIndex" type="Number">当前Windows位置</field>
        /// <field name="eles" type="Array" elementType="Element">对象的集合</field>
        var self = this;
        this.NowIndex = 0;
        this.eles = [];
        for (var i = 0; i < data.length; i++) {
            document.getElementById(data[i]) && self.eles.push(document.getElementById(data[i]));
        }
        self.getIndex();
    };
    NowPlace.prototype.getIndex = function () {
        /// <summary>获取当前位置</summary>
        /// <returns type="Number" />
        var self = this;
        var winTop = window.scrollY;
        var winH = window.innerHeight;
        var maxH = 0;

        var top, ele, eleH, _maxEleH = 0;
        for (var i = 0; i < self.eles.length; i++) {
            ele = self.eles[i];
            top = ele.offsetTop;
            eleH = ele.clientHeight;
            if (top > winTop && top < winTop + winH) {
                _maxEleH = winH + winTop - top;
            } else if (winTop > top && winTop < top + eleH) {
                _maxEleH = eleH + top - winTop;
            } else if (top == winTop) {
                _maxEleH = winH > eleH ? eleH : winH;
            }
            if (_maxEleH > maxH) {
                maxH = _maxEleH;
                self.NowIndex = i;
            }
        }
        return self.NowIndex;
    };
})();