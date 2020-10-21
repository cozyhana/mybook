 ### svg图片制作
 地址：[iconmoon](https://icomoon.io/app/#/select/image)

 ### 注入`symbol-defs.svg` = svgContent
 > `document.querySelector('body').innerHtml += svgContent`

### 引入`style.css`
```
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
```

 ### 加入row-loader

[raw-loader](https://www.npmjs.com/package/raw-loader) 
：
A loader for webpack that allows importing files as a String.

### 封装svg

```
<svg className={className ? `icon ${className}` : 'icon'} style={style}>
        <use xlinkHref={`#icon-${icon}`} >
          {
            title
              ?
              <title>{title}</title>
              :
              ''
          }
        </use>
</svg >
```







