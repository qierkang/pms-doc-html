import{_ as y,C as s,o as i,c as E,k as p,a as l,H as n,Q as a}from"./chunks/framework.efea9256.js";const f=JSON.parse('{"title":"html","description":"","frontmatter":{},"headers":[],"relativePath":"use/html.md","filePath":"use/html.md"}'),g={name:"use/html.md"},u={id:"html",tabindex:"-1"},d=p("a",{class:"header-anchor",href:"#html","aria-label":'Permalink to "html <Badge type="tip" text="v3.15.0+" vertical="middle" />"'},"​",-1),A=a(`<p>使用 <code>html</code> api 获取<code>&lt;ruby&gt;&lt;/ruby&gt;</code> 格式的汉字和拼音 HTML 字符串。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><h3 id="常规使用" tabindex="-1">常规使用 <a class="header-anchor" href="#常规使用" aria-label="Permalink to &quot;常规使用&quot;">​</a></h3><p><code>html</code> api 返回值为 HTML 格式的字符串：</p><ul><li>每个汉字和拼音最外层是由一个 <code>&lt;span class=&quot;py-result-item&quot;&gt;&lt;/span&gt;</code> 标签包裹(可以通过 <code>resultClass</code> 属性自定义该标签的类名)</li><li>内层是 <code>&lt;ruby&gt;&lt;/ruby&gt;</code> 标签用于展示汉字和拼音</li><li>汉字部分由 <code>&lt;span class=&quot;py-chinese-item&quot;&gt;&lt;/span&gt;</code> 标签包裹(可以通过 <code>chineseClass</code> 属性自定义该标签的类名)</li><li>拼音部分由 <code>&lt;rt class=&quot;py-pinyin-item&quot;&gt;&lt;/rt&gt;</code> 标签包裹(可以通过 <code>pinyinClass</code> 属性自定义该标签的类名)</li><li>默认情况下，非汉字没有标签包裹。通过设置 <code>wrapNonChinese</code> 属性的值为 <code>true</code>，非汉字部分会被 <code>&lt;span class=&quot;py-non-chinese-item&quot;&gt;&lt;/span&gt;</code> 标签包裹。(可以通过 <code>nonChineseClass</code> 属性自定义该标签的类名)</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { html } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">htmlString</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;汉语拼音&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;汉&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;hàn&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;语&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;yǔ&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;拼&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;pīn&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;音&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;yīn&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { html } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">htmlString</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;汉语拼音&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;汉&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;hàn&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;语&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;yǔ&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;拼&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;pīn&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;音&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;yīn&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><p>上述 <code>htmlString</code> 字符串在浏览器中的预览效果如下：</p>`,7),D=a(`<h3 id="不带音调" tabindex="-1">不带音调 <a class="header-anchor" href="#不带音调" aria-label="Permalink to &quot;不带音调&quot;">​</a></h3><p>当设置 <code>toneType</code> 属性的值为 <code>none</code> 时，返回值中的拼音是不带音调的。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { html } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">htmlString</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;汉语拼音&#39;</span><span style="color:#E1E4E8;">, { toneType: </span><span style="color:#9ECBFF;">&#39;none&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;汉&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;han&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;语&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;yu&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;拼&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;pin&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;音&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;yin&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { html } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">htmlString</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;汉语拼音&#39;</span><span style="color:#24292E;">, { toneType: </span><span style="color:#032F62;">&#39;none&#39;</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;汉&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;han&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;语&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;yu&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;拼&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;pin&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;span class=&quot;py-chinese-item&quot;&gt;音&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rt class=&quot;py-pinyin-item&quot;&gt;yin&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><p>上述 <code>htmlString</code> 字符串在浏览器中的预览效果如下：</p>`,4),m=a(`<h3 id="自定义样式" tabindex="-1">自定义样式 <a class="header-anchor" href="#自定义样式" aria-label="Permalink to &quot;自定义样式&quot;">​</a></h3><p>可以通过 <code>html</code> api 返回值中的类名来控制具体的样式，如下面的例子中，我们让汉字部分为蓝色，拼音部分为红色。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { html } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">htmlString</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;汉语拼音&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { html } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">htmlString</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;汉语拼音&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* css */</span></span>
<span class="line"><span style="color:#B392F0;">.py-chinese-item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">blue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.py-pinyin-item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* css */</span></span>
<span class="line"><span style="color:#6F42C1;">.py-chinese-item</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">blue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.py-pinyin-item</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">red</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在浏览器中的预览效果：</p>`,5),h=a(`<h3 id="指定文字样式" tabindex="-1">指定文字样式 <a class="header-anchor" href="#指定文字样式" aria-label="Permalink to &quot;指定文字样式&quot;">​</a></h3><p>可以通过 <code>customClassMap</code> 参数对于指定字符应用单独的样式。如下面的例子中，让 <code>汉</code> 部分为红色，<code>音</code> 部分为蓝色。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { html } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">htmlString</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;汉语拼音&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  customClassMap: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;red-item&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;汉&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;blue-item&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;音&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item red-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;span class=&quot;py-chinese-item&quot;&gt;汉&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rt class=&quot;py-pinyin-item&quot;&gt;hàn&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;span class=&quot;py-chinese-item&quot;&gt;语&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rt class=&quot;py-pinyin-item&quot;&gt;yǔ&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;span class=&quot;py-chinese-item&quot;&gt;拼&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rt class=&quot;py-pinyin-item&quot;&gt;pīn&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item blue-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;span class=&quot;py-chinese-item&quot;&gt;音&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rt class=&quot;py-pinyin-item&quot;&gt;yīn&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { html } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">htmlString</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;汉语拼音&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  customClassMap: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;red-item&#39;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;汉&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;blue-item&#39;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;音&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item red-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;span class=&quot;py-chinese-item&quot;&gt;汉&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rt class=&quot;py-pinyin-item&quot;&gt;hàn&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;span class=&quot;py-chinese-item&quot;&gt;语&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rt class=&quot;py-pinyin-item&quot;&gt;yǔ&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;span class=&quot;py-chinese-item&quot;&gt;拼&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rt class=&quot;py-pinyin-item&quot;&gt;pīn&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;span class=&quot;py-result-item blue-item&quot;&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;span class=&quot;py-chinese-item&quot;&gt;音&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;(&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rt class=&quot;py-pinyin-item&quot;&gt;yīn&lt;/rt&gt;</span></span>
<span class="line"><span style="color:#6A737D;">		&lt;rp&gt;)&lt;/rp&gt;</span></span>
<span class="line"><span style="color:#6A737D;">	&lt;/ruby&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/span&gt;</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* css */</span></span>
<span class="line"><span style="color:#B392F0;">.red-item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.blue-item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">blue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* css */</span></span>
<span class="line"><span style="color:#6F42C1;">.red-item</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">red</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.blue-item</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">blue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在浏览器中的预览效果：</p>`,5),q=a(`<h2 id="语法及参数" tabindex="-1">语法及参数 <a class="header-anchor" href="#语法及参数" aria-label="Permalink to &quot;语法及参数&quot;">​</a></h2><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { customPinyin } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HtmlOptions</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">resultClass</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">pinyinClass</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">chineseClass</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">wrapNonChinese</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">nonChineseClass</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">tone</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">rp</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// v3.24.2+  是否输出 &lt;rp&gt;(&lt;/rp&gt; 和 &lt;rp&gt;)&lt;/rp&gt; 标签</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HtmlOptions</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { customPinyin } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlOptions</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">resultClass</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">pinyinClass</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">chineseClass</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">wrapNonChinese</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">nonChineseClass</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">tone</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">rp</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// v3.24.2+  是否输出 &lt;rp&gt;(&lt;/rp&gt; 和 &lt;rp&gt;)&lt;/rp&gt; 标签</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">(</span><span style="color:#E36209;">text</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">options</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlOptions</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> {}</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><code>text</code> (必传): string 类型，要转换的汉字字符串。</li><li><code>options</code> (可选): object 类型，返回值相关的配置，具体如下表：</li></ul><table><tr><th>属性</th><th>类型</th><th>描述</th><th>可选值</th><th width="180">默认值</th></tr><tr><td>resultClass</td><td>string</td><td>汉字和拼音最外层 <code>&lt;span&gt;</code> 标签的类名</td><td>-</td><td>py-result-item</td></tr><tr><td>pinyinClass</td><td>string</td><td>拼音外层 <code>&lt;rt&gt;</code> 标签的类名</td><td>-</td><td>py-pinyin-item</td></tr><tr><td>chineseClass</td><td>string</td><td>汉字外层 <code>&lt;span&gt;</code> 标签的类名</td><td>-</td><td>py-chinese-item</td></tr><tr><td>wrapNonChinese</td><td>boolean</td><td>是否用 <code>&lt;span&gt;</code> 标签包裹非汉字字符。如果是要对非汉字字符也做一些自定义样式处理，建议设置为 <code>true</code>; 如果 text 参数本身也是一个 HTML 字符串，建议设置为 <code>false</code> 以防止影响 text 本身的结构</td><td><code>true/false</code></td><td>false</td></tr><tr><td>nonChineseClass</td><td>string</td><td>非汉字字符外层 <code>&lt;span&gt;</code> 标签的类名（仅在 <code>wrapNonChinese</code> 值为 <code>true</code> 时有效）</td><td>-</td><td>py-non-chinese-item</td></tr><tr><td>toneType</td><td>string</td><td>拼音中音调的显示形式</td><td><code>symbol/none/num</code></td><td>symbol</td></tr></table>`,6);function F(b,C,_,B,v,k){const t=s("Badge"),o=s("html-basic-demo"),e=s("html-no-tone-demo"),c=s("html-style-demo"),r=s("html-custom-class-demo");return i(),E("div",null,[p("h1",u,[l("html "),n(t,{type:"tip",text:"v3.15.0+",vertical:"middle"}),l(),d]),A,n(o),D,n(e),m,n(c),h,n(r),q])}const S=y(g,[["render",F]]);export{f as __pageData,S as default};
