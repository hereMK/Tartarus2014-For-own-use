hostname = trade-acs.m.taobao.com,api.m.jd.com

# 京东历史价格
http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig) script-path=https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js, requires-body=true, timeout=10, enabled=false, tag=jd_price.js

# 淘宝比价
http-request ^http://.+/amdc/mobileDispatch script-path=https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js, requires-body=true, timeout=10, enabled=false, tag=tb_price.js
http-response ^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail script-path=https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js, requires-body=true, timeout=10, enabled=false, tag=tb_price.js
