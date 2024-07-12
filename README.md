Projeyi ayağa kaldırmak için proje klasörünün ana dizininde:
1- npm install
2- npm run dev

Proje Canlı Link: https://turkcell-final.vercel.app/en
Not: Backend servis sağlayıcısı ücretsiz bir servis sağlayıcı olduğu için uygulama ilk açıldığında verilerin gelmesi 30 saniye sürebilir.
Eğer veriler gelmezse sayfayı yenileyiniz.
Eğer veriler yine gelmez ise proje klasörünün ana dizininde src/server/baseUrl.js dosyasında ilk satırı yorum satırına alınız, ikinci satırı yorum satırından çıkartınız.
Daha sonra proje klasörünün ana dizininde cd .\src\database\ komutunu çalıştırın ve dizine gidin.
Sonrasında json-server --watch db.json --port 3002 komutunu çalıştırın.
