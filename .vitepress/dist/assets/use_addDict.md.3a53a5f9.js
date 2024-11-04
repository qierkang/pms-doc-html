import{_ as l,A as o,o as e,c as t,k as n,a,E as c,O as r}from"./chunks/framework.81f5db25.js";const g=JSON.parse('{"title":"addDict","description":"","frontmatter":{},"headers":[],"relativePath":"use/addDict.md","filePath":"use/addDict.md"}'),y={name:"use/addDict.md"},i={id:"adddict",tabindex:"-1"};function E(d,s,u,h,F,m){const p=o("Badge");return e(),t("div",null,[n("h1",i,[s[0]||(s[0]=a("addDict ")),c(p,{type:"tip",text:"v3.20.0+",vertical:"middle"}),s[1]||(s[1]=a()),s[2]||(s[2]=n("a",{class:"header-anchor",href:"#adddict","aria-label":'Permalink to "addDict <Badge type="tip" text="v3.20.0+" vertical="middle" />"'},"​",-1))]),s[3]||(s[3]=r(`<p><code>pms-doc</code> 内置了一些高频常用词的词典，想要保证高准确率，需要应用更完备的词典，可以通过 <code>addDict</code> 添加词典。详见 <a href="https://github.com/chinese-data/pms-doc-data" target="_blank" rel="noreferrer">@pms-doc/data</a></p><p>通过 <code>npm install @pms-doc/data</code> 进行安装。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><h3 id="使用内置词典-默认" tabindex="-1">使用内置词典(默认) <a class="header-anchor" href="#使用内置词典-默认" aria-label="Permalink to &quot;使用内置词典(默认)&quot;">​</a></h3><p>默认词典词汇数量较少，例如不包含 <code>日本京都大学</code>，会导致 <code>都</code> 的读音识别错误：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pinyin } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pinyin</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;小明硕士毕业于中国科学院计算所，后在日本京都大学深造&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 结果: xiǎo míng shuò shì bì yè yú zhōng guó kē xué yuàn jì suàn suǒ ， hòu zài rì běn jīng dōu dà xué shēn zào</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { pinyin } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pinyin</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;小明硕士毕业于中国科学院计算所，后在日本京都大学深造&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 结果: xiǎo míng shuò shì bì yè yú zhōng guó kē xué yuàn jì suàn suǒ ， hòu zài rì běn jīng dōu dà xué shēn zào</span></span></code></pre></div><h3 id="使用现代汉语词典" tabindex="-1">使用现代汉语词典 <a class="header-anchor" href="#使用现代汉语词典" aria-label="Permalink to &quot;使用现代汉语词典&quot;">​</a></h3><p>包含 <code>日本京都大学</code>，可以识别准确（gzip 压缩后大概 0.6MB，根据自己的需求决定是否使用）：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pinyin, addDict } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入前需要先通过 \`npm install @pms-doc/data\` 进行安装</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ModernChineseDict </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@pms-doc/data/modern&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">addDict</span><span style="color:#E1E4E8;">(ModernChineseDict);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pinyin</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;小明硕士毕业于中国科学院计算所，后在日本京都大学深造&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 结果: 结果: xiǎo míng shuò shì bì yè yú zhōng guó kē xué yuàn jì suàn suǒ ， hòu zài rì běn jīng dū dà xué shēn zào</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { pinyin, addDict } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入前需要先通过 \`npm install @pms-doc/data\` 进行安装</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ModernChineseDict </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@pms-doc/data/modern&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">addDict</span><span style="color:#24292E;">(ModernChineseDict);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pinyin</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;小明硕士毕业于中国科学院计算所，后在日本京都大学深造&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 结果: 结果: xiǎo míng shuò shì bì yè yú zhōng guó kē xué yuàn jì suàn suǒ ， hòu zài rì běn jīng dū dà xué shēn zào</span></span></code></pre></div><h3 id="使用完整词典" tabindex="-1">使用完整词典 <a class="header-anchor" href="#使用完整词典" aria-label="Permalink to &quot;使用完整词典&quot;">​</a></h3><p>包含词语更多，识别率更加准确（gzip 压缩后大概 3.99MB，根据自己的需求决定是否使用）：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pinyin, addDict } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入前需要先通过 \`npm install @pms-doc/data\` 进行安装</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> CompleteDict </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@pms-doc/data/complete&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">addDict</span><span style="color:#E1E4E8;">(CompleteDict);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pinyin</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;小明硕士毕业于中国科学院计算所，后在日本京都大学深造&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 结果: 结果: xiǎo míng shuò shì bì yè yú zhōng guó kē xué yuàn jì suàn suǒ ， hòu zài rì běn jīng dū dà xué shēn zào</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { pinyin, addDict } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入前需要先通过 \`npm install @pms-doc/data\` 进行安装</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> CompleteDict </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@pms-doc/data/complete&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">addDict</span><span style="color:#24292E;">(CompleteDict);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pinyin</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;小明硕士毕业于中国科学院计算所，后在日本京都大学深造&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 结果: 结果: xiǎo míng shuò shì bì yè yú zhōng guó kē xué yuàn jì suàn suǒ ， hòu zài rì běn jīng dū dà xué shēn zào</span></span></code></pre></div><h2 id="语法及参数" tabindex="-1">语法及参数 <a class="header-anchor" href="#语法及参数" aria-label="Permalink to &quot;语法及参数&quot;">​</a></h2><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { addDict } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pms-doc&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DICT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#FFAB70;">key</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 拼音</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// [拼音]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// [拼音, 词频概率]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> [string, number, string]; </span><span style="color:#6A737D;">// [拼音, 词频概率, 词性]</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addDict</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dict</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DICT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> {}, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { addDict } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pms-doc&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DICT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#E36209;">key</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 拼音</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">// [拼音]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">// [拼音, 词频概率]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> [string, number, string]; </span><span style="color:#6A737D;">// [拼音, 词频概率, 词性]</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addDict</span><span style="color:#24292E;">(</span><span style="color:#E36209;">dict</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DICT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> {}, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><code>dict</code> (必传)：词典。</li><li><code>name</code> (可选)：词典名称。</li></ul>`,17))])}const C=l(y,[["render",E]]);export{g as __pageData,C as default};
