import{_ as l,C as p,o,c as e,k as n,a as s,H as t,Q as c}from"./chunks/framework.653e77dd.js";const C=JSON.parse('{"title":"polyphonic","description":"","frontmatter":{},"headers":[],"relativePath":"use/polyphonic.md","filePath":"use/polyphonic.md"}'),r={name:"use/polyphonic.md"},y={id:"polyphonic",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#polyphonic","aria-label":'Permalink to "polyphonic <Badge type="tip" text="v3.15.0+" vertical="middle" />"'},"​",-1),E=c(`<p>使用 <code>polyphonic</code> api 来获取多音字的全部读音。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>大多数情况下你只需要使用 <a href="/help/use/pinyin.html">pinyin</a> api，它会自动识别文本中多音字的正确读音。<code>polyphonic</code> 是用来获取每个字的所有读音的而不是多音字在句子中的正确读音。</p></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><h3 id="常规使用" tabindex="-1">常规使用 <a class="header-anchor" href="#常规使用" aria-label="Permalink to &quot;常规使用&quot;">​</a></h3><p>使用 <code>type</code> 属性控制返回值的格式：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { polyphonic } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">resultString</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">polyphonic</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;好好学习&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// [&#39;hǎo hào&#39;, &#39;hǎo hào&#39;, &#39;xué&#39;, &#39;xí&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">resultArray</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">polyphonic</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;好好学习&#39;</span><span style="color:#E1E4E8;">, { type: </span><span style="color:#9ECBFF;">&#39;array&#39;</span><span style="color:#E1E4E8;"> }); </span><span style="color:#6A737D;">// [[&#39;hǎo&#39;, &#39;hào&#39;], [&#39;hǎo&#39;, &#39;hào&#39;], [&#39;xué&#39;], [&#39;xí&#39;]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">resultAll</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">polyphonic</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;好好学习&#39;</span><span style="color:#E1E4E8;">, { type: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">[</span></span>
<span class="line"><span style="color:#6A737D;">  [</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">      final: &#39;ǎo&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalBody: &#39;ǎ&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalHead: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalTail: &#39;o&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      first: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      initial: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      isZh: true,</span></span>
<span class="line"><span style="color:#6A737D;">      num: 3,</span></span>
<span class="line"><span style="color:#6A737D;">      origin: &#39;好&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      pinyin: &#39;hǎo&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">      final: &#39;ào&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalBody: &#39;à&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalHead: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalTail: &#39;o&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      first: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      initial: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      isZh: true,</span></span>
<span class="line"><span style="color:#6A737D;">      num: 4,</span></span>
<span class="line"><span style="color:#6A737D;">      origin: &#39;好&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      pinyin: &#39;hào&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">  ],</span></span>
<span class="line"><span style="color:#6A737D;">  [</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">      final: &#39;ǎo&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalBody: &#39;ǎ&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalHead: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalTail: &#39;o&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      first: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      initial: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      isZh: true,</span></span>
<span class="line"><span style="color:#6A737D;">      num: 3,</span></span>
<span class="line"><span style="color:#6A737D;">      origin: &#39;好&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      pinyin: &#39;hǎo&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">      final: &#39;ào&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalBody: &#39;à&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalHead: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalTail: &#39;o&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      first: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      initial: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      isZh: true,</span></span>
<span class="line"><span style="color:#6A737D;">      num: 4,</span></span>
<span class="line"><span style="color:#6A737D;">      origin: &#39;好&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      pinyin: &#39;hào&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">  ],</span></span>
<span class="line"><span style="color:#6A737D;">  [</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">      final: &#39;üé&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalBody: &#39;é&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalHead: &#39;ü&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalTail: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      first: &#39;x&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      initial: &#39;x&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      isZh: true,</span></span>
<span class="line"><span style="color:#6A737D;">      num: 2,</span></span>
<span class="line"><span style="color:#6A737D;">      origin: &#39;学&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      pinyin: &#39;xué&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">  ],</span></span>
<span class="line"><span style="color:#6A737D;">  [</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">      final: &#39;í&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalBody: &#39;í&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalHead: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalTail: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      first: &#39;x&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      initial: &#39;x&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      isZh: true,</span></span>
<span class="line"><span style="color:#6A737D;">      num: 2,</span></span>
<span class="line"><span style="color:#6A737D;">      origin: &#39;习&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      pinyin: &#39;xí&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">  ],</span></span>
<span class="line"><span style="color:#6A737D;">];</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { polyphonic } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">resultString</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">polyphonic</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;好好学习&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// [&#39;hǎo hào&#39;, &#39;hǎo hào&#39;, &#39;xué&#39;, &#39;xí&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">resultArray</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">polyphonic</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;好好学习&#39;</span><span style="color:#24292E;">, { type: </span><span style="color:#032F62;">&#39;array&#39;</span><span style="color:#24292E;"> }); </span><span style="color:#6A737D;">// [[&#39;hǎo&#39;, &#39;hào&#39;], [&#39;hǎo&#39;, &#39;hào&#39;], [&#39;xué&#39;], [&#39;xí&#39;]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">resultAll</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">polyphonic</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;好好学习&#39;</span><span style="color:#24292E;">, { type: </span><span style="color:#032F62;">&#39;all&#39;</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">[</span></span>
<span class="line"><span style="color:#6A737D;">  [</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">      final: &#39;ǎo&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalBody: &#39;ǎ&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalHead: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalTail: &#39;o&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      first: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      initial: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      isZh: true,</span></span>
<span class="line"><span style="color:#6A737D;">      num: 3,</span></span>
<span class="line"><span style="color:#6A737D;">      origin: &#39;好&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      pinyin: &#39;hǎo&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">      final: &#39;ào&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalBody: &#39;à&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalHead: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalTail: &#39;o&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      first: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      initial: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      isZh: true,</span></span>
<span class="line"><span style="color:#6A737D;">      num: 4,</span></span>
<span class="line"><span style="color:#6A737D;">      origin: &#39;好&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      pinyin: &#39;hào&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">  ],</span></span>
<span class="line"><span style="color:#6A737D;">  [</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">      final: &#39;ǎo&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalBody: &#39;ǎ&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalHead: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalTail: &#39;o&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      first: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      initial: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      isZh: true,</span></span>
<span class="line"><span style="color:#6A737D;">      num: 3,</span></span>
<span class="line"><span style="color:#6A737D;">      origin: &#39;好&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      pinyin: &#39;hǎo&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">      final: &#39;ào&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalBody: &#39;à&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalHead: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalTail: &#39;o&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      first: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      initial: &#39;h&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      isZh: true,</span></span>
<span class="line"><span style="color:#6A737D;">      num: 4,</span></span>
<span class="line"><span style="color:#6A737D;">      origin: &#39;好&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      pinyin: &#39;hào&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">  ],</span></span>
<span class="line"><span style="color:#6A737D;">  [</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">      final: &#39;üé&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalBody: &#39;é&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalHead: &#39;ü&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalTail: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      first: &#39;x&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      initial: &#39;x&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      isZh: true,</span></span>
<span class="line"><span style="color:#6A737D;">      num: 2,</span></span>
<span class="line"><span style="color:#6A737D;">      origin: &#39;学&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      pinyin: &#39;xué&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">  ],</span></span>
<span class="line"><span style="color:#6A737D;">  [</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">      final: &#39;í&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalBody: &#39;í&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalHead: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      finalTail: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      first: &#39;x&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      initial: &#39;x&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      isZh: true,</span></span>
<span class="line"><span style="color:#6A737D;">      num: 2,</span></span>
<span class="line"><span style="color:#6A737D;">      origin: &#39;习&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      pinyin: &#39;xí&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">  ],</span></span>
<span class="line"><span style="color:#6A737D;">];</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><h3 id="不带音调" tabindex="-1">不带音调 <a class="header-anchor" href="#不带音调" aria-label="Permalink to &quot;不带音调&quot;">​</a></h3><p>使用 <code>toneType</code> 属性控制音调的展示形式：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { polyphonic } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">resultNone</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">polyphonic</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;好好学习&#39;</span><span style="color:#E1E4E8;">, { toneType: </span><span style="color:#9ECBFF;">&#39;none&#39;</span><span style="color:#E1E4E8;"> }); </span><span style="color:#6A737D;">// [&#39;hao&#39;, &#39;hao&#39;, &#39;xue&#39;, &#39;xi&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">resultNum</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">polyphonic</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;好好学习&#39;</span><span style="color:#E1E4E8;">, { toneType: </span><span style="color:#9ECBFF;">&#39;num&#39;</span><span style="color:#E1E4E8;"> }); </span><span style="color:#6A737D;">// [&#39;hao3 hao4&#39;, &#39;hao3 hao4&#39;, &#39;xue2&#39;, &#39;xi2&#39;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { polyphonic } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">resultNone</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">polyphonic</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;好好学习&#39;</span><span style="color:#24292E;">, { toneType: </span><span style="color:#032F62;">&#39;none&#39;</span><span style="color:#24292E;"> }); </span><span style="color:#6A737D;">// [&#39;hao&#39;, &#39;hao&#39;, &#39;xue&#39;, &#39;xi&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">resultNum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">polyphonic</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;好好学习&#39;</span><span style="color:#24292E;">, { toneType: </span><span style="color:#032F62;">&#39;num&#39;</span><span style="color:#24292E;"> }); </span><span style="color:#6A737D;">// [&#39;hao3 hao4&#39;, &#39;hao3 hao4&#39;, &#39;xue2&#39;, &#39;xi2&#39;]</span></span></code></pre></div><h2 id="语法及参数" tabindex="-1">语法及参数 <a class="header-anchor" href="#语法及参数" aria-label="Permalink to &quot;语法及参数&quot;">​</a></h2><p><code>polyphonic</code> 的参数大部分和 <code>pinyin</code> 是相同的。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { polyphonic } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BasicOptions</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;array&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">toneType</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;symbol&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;num&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;none&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">pattern</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pinyin&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;initial&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;final&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;num&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;first&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;finalHead&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;finalBody&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;finalTail&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">nonZh</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;spaced&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;consecutive&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;removed&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">v</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AllData</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">origin</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">pinyin</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">initial</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">final</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">num</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">first</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">finalHead</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">finalBody</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">finalTail</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">isZh</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 返回转换后的信息</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">polyphonic</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">text</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BasicOptions</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">[][] </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AllData</span><span style="color:#E1E4E8;">[][]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { polyphonic } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BasicOptions</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;array&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;all&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">toneType</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;symbol&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;num&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;none&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">pattern</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pinyin&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;initial&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;final&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;num&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;first&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;finalHead&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;finalBody&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;finalTail&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">nonZh</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;spaced&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;consecutive&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;removed&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">v</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AllData</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">origin</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">pinyin</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">initial</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">final</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">num</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">first</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">finalHead</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">finalBody</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">finalTail</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">isZh</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 返回转换后的信息</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">polyphonic</span><span style="color:#24292E;">(</span><span style="color:#E36209;">text</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">options</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BasicOptions</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">[][] </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AllData</span><span style="color:#24292E;">[][]</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table><tr><th>属性</th><th>类型</th><th>描述</th><th>可选值</th><th>说明</th><th width="100">默认值</th></tr><tr><td rowspan="3">type</td><td rowspan="3">string</td><td rowspan="3">返回的格式</td><td>string</td><td>string 数组</td><td rowspan="3">string</td></tr><tr><td>array</td><td>string 二维数组</td></tr><tr><td>all</td><td>AllData 类型二维数组</td></tr><tr><td rowspan="3">toneType</td><td rowspan="3">string</td><td rowspan="3">音调展示的形式</td><td>symbol</td><td>正常拼音音调</td><td rowspan="3">symbol</td></tr><tr><td>none</td><td>不展示</td></tr><tr><td>num</td><td>跟在拼音后以数字展示</td></tr><tr><td rowspan="8">pattern</td><td rowspan="8">string</td><td rowspan="8">展示的内容</td><td>pinyin</td><td>拼音全拼</td><td rowspan="8">pinyin</td></tr><tr><td>initial</td><td>声母</td></tr><tr><td>final</td><td>韵母</td></tr><tr><td>num</td><td>音调对应数字</td></tr><tr><td>first</td><td>首字母</td></tr><tr><td>finalHead</td><td>韵头</td></tr><tr><td>finalBody</td><td>韵腹</td></tr><tr><td>finalTail</td><td>韵尾</td></tr><tr><td rowspan="3">nonZh</td><td rowspan="3">string</td><td rowspan="3">非中文字符处理</td><td>spaced</td><td>空格间隔开</td><td rowspan="3">spaced</td></tr><tr><td>consecutive</td><td>连续</td></tr><tr><td>removed</td><td>从返回值中移除</td></tr><tr><td rowspan="2">v</td><td rowspan="2">boolean</td><td rowspan="2">是否使用<code>v</code>替换返回值中的<code>ü</code></td><td>false</td><td>不替换</td><td rowspan="2">false</td></tr><tr><td>true</td><td>替换</td></tr></table>`,15);function d(A,D,F,h,f,u){const a=p("Badge");return o(),e("div",null,[n("h1",y,[s("polyphonic "),t(a,{type:"tip",text:"v3.15.0+",vertical:"middle"}),s(),i]),E])}const m=l(r,[["render",d]]);export{C as __pageData,m as default};
