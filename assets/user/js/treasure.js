const treasure = new class Treasure {
    show(tradeNo, secret) {
        $(document).off('click', '.treasure-copy-btn').on('click', '.treasure-copy-btn', function () {
            const text = $(this).siblings('.treasure-secret').val();
            util.copyTextToClipboard(text, () => {
                message.success("复制成功");
            }, () => {
                message.error("复制失败");
            });
        });
        layer.open({
            type: 1,
            title: `${util.icon("fa-duotone fa-regular fa-baby-carriage")} 您购买的宝贝信息:`,
            area: util.isMobile() ? ["100%", "100%"] : ['420px', '420px'],
            content: '<div style="height:100%;display:flex;flex-direction:column;"><button type="button" class="layui-btn layui-btn-sm treasure-copy-btn" style="margin:10px 10px 0 auto;">复制卡密</button><textarea class="layui-input treasure-secret" style="padding:15px;flex:1;min-height:0;width:100%;border:none;overflow-x:hidden;white-space:pre-wrap;word-break:break-all;resize:none;">' + secret + '</textarea></div>',
            btn: ['<span style="color:#aaaaaa;">查看更多信息/下载</span>'],
            yes: function () {
                window.open('/user/personal/purchaseRecord?tradeNo=' + tradeNo);
            }
        });
    }
}
