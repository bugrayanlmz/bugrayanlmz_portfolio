# Portfolio Website - React

Modern ve responsive bir portfolyo web sitesi. React ile geliştirilmiştir.

## 🚀 Özellikler

- ✅ Modern ve temiz tasarım
- ✅ Tam responsive (mobil uyumlu)
- ✅ Sidebar navigasyon
- ✅ Hakkımda sayfası
- ✅ Journey (Zaman çizelgesi)
- ✅ Projeler sayfası
- ✅ 2025 Hedefler sayfası
- ✅ Blog/Yazı yazma özelliği
- ✅ Admin paneli (localhost'ta aktif)
- ✅ localStorage ile veri saklama
- ✅ Smooth animasyonlar

## 📦 Kurulum

Projeyi çalıştırmak için aşağıdaki adımları takip edin:

### 1. Bağımlılıkları yükleyin

```bash
npm install
```

### 2. Geliştirme sunucusunu başlatın

```bash
npm start
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde açılacaktır.

### 3. Production build oluşturma

```bash
npm run build
```

Build klasörüne optimize edilmiş dosyalar oluşturulacaktır.

## 📁 Proje Yapısı

```
portfolio-react/
├── public/
│   ├── images/          # Resim dosyaları
│   └── index.html       # Ana HTML dosyası
├── src/
│   ├── components/      # React componentleri
│   │   ├── About.js
│   │   ├── Blog.js
│   │   ├── BlogPost.js
│   │   ├── Goals.js
│   │   ├── GoalItem.js
│   │   ├── Journey.js
│   │   ├── Projects.js
│   │   ├── ProjectCard.js
│   │   ├── Sidebar.js
│   │   └── TimelineItem.js
│   ├── App.js           # Ana uygulama
│   ├── App.css          # Ana stil dosyası
│   ├── index.js         # Giriş noktası
│   └── index.css        # Global stiller
├── package.json
└── README.md
```

## 🎨 Kullanılan Teknolojiler

- **React 18** - UI kütüphanesi
- **React Icons** - İkon kütüphanesi
- **CSS3** - Styling ve animasyonlar
- **localStorage** - Blog yazılarını saklama

## 🔧 Özelleştirme

### Kişisel Bilgileri Güncelleme

`src/components/About.js` dosyasından kişisel bilgilerinizi güncelleyebilirsiniz.

### Sosyal Medya Linkleri

`src/components/Sidebar.js` dosyasındaki `socialLinks` array'ini düzenleyin.

### Projeleri Ekleme

`src/components/Projects.js` dosyasındaki `projects` array'ine yeni projeler ekleyebilirsiniz.

### Hedefleri Değiştirme

`src/components/Goals.js` dosyasındaki `goals` array'ini düzenleyin.

## 📝 Blog Özelliği

Blog özelliği sadece localhost'ta (geliştirme modunda) admin olarak çalışır. Production'da blog yazıları sadece okunabilir moddadır.

Blog yazıları localStorage'da saklanır, bu nedenle:

- Tarayıcı verilerini temizlerseniz yazılar silinir
- Her tarayıcıda farklı yazılar görünebilir

## 🌐 Deployment

### Netlify ile Deploy

1. GitHub'a push edin
2. Netlify'da yeni site oluşturun
3. Repository'nizi bağlayın
4. Build command: `npm run build`
5. Publish directory: `build`

### Vercel ile Deploy

```bash
npm install -g vercel
vercel
```

## 📱 Responsive Tasarım

Site tüm cihazlarda düzgün çalışacak şekilde tasarlanmıştır:

- 📱 Mobil cihazlar (< 768px)
- 💻 Tablet ve laptop
- 🖥️ Desktop

## 📄 Lisans

Bu proje kişisel kullanım içindir.

## 👤 İletişim

- **Email**: bugrayanlmz@gmail.com
- **LinkedIn**: [bugrayanlmz](https://www.linkedin.com/in/bugrayanlmz/)
- **GitHub**: [bugrayanlmz](https://github.com/bugrayanlmz)

---

Made with ❤️ by Buğra Yanılmaz
