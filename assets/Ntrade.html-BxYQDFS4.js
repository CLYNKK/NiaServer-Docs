import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as r,c as l,a as n,b as s,d as e,e as t}from"./app-DFsXlHK3.js";const c={},i=t('<h1 id="📦ntrade使用教程" tabindex="-1"><a class="header-anchor" href="#📦ntrade使用教程" aria-hidden="true">#</a> 📦Ntrade使用教程</h1><div class="hint-container warning"><p class="hint-container-title">Ntrade目前已经停止维护，不再提供任何技术支持，请尽量不要使用该插件，目前该项目已被基于script-api的插件NiaServer-Core中的market.js替代！</p></div><h3 id="插件作用" tabindex="-1"><a class="header-anchor" href="#插件作用" aria-hidden="true">#</a> 插件作用</h3><p>用于实现玩家间交易的一个插件</p><h3 id="初始化插件" tabindex="-1"><a class="header-anchor" href="#初始化插件" aria-hidden="true">#</a> 初始化插件</h3>',5),u={href:"https://github.com/LiteLDev/LiteLoaderBDS",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/NIANIANKNIA/Ntrade/releases",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,[n("p",null,"将解压包中的Ntrade.lxl.js放到BDS根目录的plugins文件夹下")],-1),k=n("li",null,[n("p",null,[s("启动"),n("strong",null,"bedrock_server_mod.exe"),s("，然后插件会自动生成相应的配置文件")])],-1),h=t(`<h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3><p>请参考以下内容修改配置文件</p><p>配置文件位置：<code>plugins/Ntrade/config.json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;marketID&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>  <span class="token comment">//市场ID，正常情况下不要更改</span>
    <span class="token property">&quot;llmoney&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>   <span class="token comment">//是否启用llmoney经济，0（false）为不启用，1（true）为启用</span>
    <span class="token property">&quot;MoneyScoresBoardName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;money&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//如果为计分板经济，相应的计分板名称</span>
    <span class="token property">&quot;Password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span>   <span class="token comment">//下架授权码</span>
    <span class="token property">&quot;BanItems&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:clock&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//禁止上架的物品id</span>
            <span class="token property">&quot;aux&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>   <span class="token comment">//禁止上架的物品特殊值（-1就是不限制特殊值）</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh_CN&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//插件的主语言 en_US 为英语</span>
    <span class="token property">&quot;AutoOffShelfTime&quot;</span><span class="token operator">:</span> <span class="token number">72</span><span class="token punctuation">,</span>   <span class="token comment">//自动下架的时间（单位：小时），设置为-1则不会自动下架</span>
    <span class="token property">&quot;TaxRate&quot;</span><span class="token operator">:</span> <span class="token number">0</span>    <span class="token comment">//转账税率，设置为0则不收手续费，若有需求，请自行更改为[0，1)的任意数字</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h3><p>1.修改完成配置文件后开服即可使用</p><p>2.在服务器中输入/trade指令打开GUI进行相应操作</p><p>3.您可以输入/opentradegui @p给最近的玩家打开交易市场GUI</p>`,8);function v(b,_){const a=p("ExternalLinkIcon");return r(),l("div",null,[i,n("ol",null,[n("li",null,[n("p",null,[s("配置好相应的BDS服务端，并安装好"),n("a",u,[s("LiteLoader"),e(a)])])]),n("li",null,[n("p",null,[s("下载最新版本的"),n("a",d,[s("Ntrade"),e(a)])])]),m,k]),h])}const g=o(c,[["render",v],["__file","Ntrade.html.vue"]]);export{g as default};