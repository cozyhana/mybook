### 框架0.58
1. ios 不支持异步请求，偶发性不请求 
   > 智慧城市出现此问题，移动门户无
2.  [ReactNative安卓打包失败&代码不更新的解决步骤](https://blog.csdn.net/weixin_34409357/article/details/91424048)
    > 打包 bundle包 ：react-native bundle --entry-file index.js --platform android --dev false --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res/

    > ./gradlew assembleRelease -x bundleReleaseJsAndAssets