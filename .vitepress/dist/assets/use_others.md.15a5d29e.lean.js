import{_ as n,o as a,c as l,O as p}from"./chunks/framework.81f5db25.js";const d=JSON.parse('{"title":"pinyin","description":"","frontmatter":{},"headers":[],"relativePath":"use/others.md","filePath":"use/others.md"}'),o={name:"use/others.md"};function e(t,s,c,r,i,y){return a(),l("div",null,s[0]||(s[0]=[p(`<h1 id="pinyin" tabindex="-1">pinyin <a class="header-anchor" href="#pinyin" aria-label="Permalink to &quot;pinyin&quot;">​</a></h1><p><code>pms-doc</code> 内部还导出了一些中间态处理函数供大家使用。</p><h3 id="getinitialandfinal" tabindex="-1">getInitialAndFinal <a class="header-anchor" href="#getinitialandfinal" aria-label="Permalink to &quot;getInitialAndFinal&quot;">​</a></h3><p>可以使用 <code>getInitialAndFinal</code> 获取指定拼音的声母和韵母:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getInitialAndFinal } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getInitialAndFinal</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;guang&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">/* 结果为：</span></span>
<span class="line"><span style="color:#6A737D;">{</span></span>
<span class="line"><span style="color:#6A737D;">  final: &#39;uang&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  initial: &#39;g&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">}</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getInitialAndFinal } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getInitialAndFinal</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;guang&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">/* 结果为：</span></span>
<span class="line"><span style="color:#6A737D;">{</span></span>
<span class="line"><span style="color:#6A737D;">  final: &#39;uang&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  initial: &#39;g&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">}</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><h3 id="getfinalparts" tabindex="-1">getFinalParts <a class="header-anchor" href="#getfinalparts" aria-label="Permalink to &quot;getFinalParts&quot;">​</a></h3><p>可以使用 <code>getFinalParts</code> 获取指定拼音的韵头/韵腹/韵尾:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getFinalParts } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getFinalParts</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;guang&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">/* 结果为：</span></span>
<span class="line"><span style="color:#6A737D;">{</span></span>
<span class="line"><span style="color:#6A737D;">  head: &quot;u&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">  body: &quot;a&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">  tail: &quot;ng&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">}</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getFinalParts } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getFinalParts</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;guang&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">/* 结果为：</span></span>
<span class="line"><span style="color:#6A737D;">{</span></span>
<span class="line"><span style="color:#6A737D;">  head: &quot;u&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">  body: &quot;a&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">  tail: &quot;ng&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">}</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><h3 id="getnumoftone" tabindex="-1">getNumOfTone <a class="header-anchor" href="#getnumoftone" aria-label="Permalink to &quot;getNumOfTone&quot;">​</a></h3><p>可以使用 <code>getNumOfTone</code> 获取指定拼音的声调对应的数字:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getNumOfTone } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getNumOfTone</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hàn yǔ de pīn yīn&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">/* 结果为：</span></span>
<span class="line"><span style="color:#6A737D;">&quot;4 3 0 1 1&quot;</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getNumOfTone } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getNumOfTone</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hàn yǔ de pīn yīn&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">/* 结果为：</span></span>
<span class="line"><span style="color:#6A737D;">&quot;4 3 0 1 1&quot;</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div>`,11)]))}const u=n(o,[["render",e]]);export{d as __pageData,u as default};
