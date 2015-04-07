# sowol_cordova
cordova 연습하기


npm 으로 코도바 설치


    $ cordova create hello com.example.hello HelloWorld 

    $ cd hello 

    $ cordova platform add android 

    $ cordova build


프로젝트 기본 생성.

### 안드로이드스튜디오 
1.  Import project (Eclipse ...)
2.  Gradle Build 하기
3.  Gradle Config 파일 확인해볼것.


SDK Cordova plugin 추가

    $ cordova plugin add https://github.com/ConnectSDK/Connect-SDK-Cordova-Plugin.git#master


코도바 프로젝트 생성 완료.

Android 프로젝트에 연결하기


1. dependencies 수정

     dependencies { 
         //... 
         compile 'com.connectsdk:connect-sdk-android:1.4.+' 
     } 




2. 안드로이드 스튜디오 세팅


① 순차적으로 실행

     cd your_project_folder
     git clone https://github.com/ConnectSDK/Connect-SDK-Android.git
     cd Connect-SDK-Android
     git submodule init
     git submodule update


② settings.gradle 수정

    include ':app', ':Connect-SDK-Android'


③ dependencies 추가

    dependencies { 
    //... 
    compile project(':Connect-SDK-Android') 
    } 


④ 싱크하기


참고 : http://connectsdk.com/docs/android/setup/
