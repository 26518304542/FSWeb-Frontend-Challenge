// src/data/data.js
export const headerData = {
  en: {
    name: "almila",
    title: "I am a Frontend Developer...",
    description:
      "…who likes to craft solid and scalable frontend products with great user experiences.",
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    profileImg: "src/assets/almila.png",
  },
  tr: {
    name: "almila",
    title: "Ben bir Frontend Developer'ım...",
    description:
      "…ölçeklenebilir ve güçlü frontend ürünleri geliştirmeyi, kullanıcı deneyimini en üst düzeye çıkarmayı severim.",
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    profileImg: "src/assets/almila.png",
  },
};

export const skillsData = {
  skills:
    [
      { name: "Javascript", icon: "src/assets/javascript.png" },
      { name: "Node", icon: "src/assets/node.png" },
      { name: "React", icon: "src/assets/react.svg" },
      { name: "VS Code", icon: "src/assets/vscode.png" },
      { name: "Redux", icon: "src/assets/redux.png" },
      { name: "Figma", icon: "src/assets/figma.png" }
    ],
  en: { skillScript: "Skills" },
  tr: { skillScript: "Yetenekler" }
};


export const profileData = {

  en: {
    basic: {
      birthday: "24/12/1998",
      birthdayStrong: "Birthday",
      city: "Ankara",
      cityStrong: "City",
      education: "Hacettepe Uni, BSc. Biology, 2016",
      educationStrong: "Education",
      role: "Frontend, UI",
      roleStrong: "Preferred Role:",
      profileHeading2: "Profile",
      basicInformationHeading2: "Basic Information",
      aboutMeHeading3: "About Me",
    }
  },
  tr: {
    basic: {
      birthday: "24/12/1998",
      birthdayStrong: "Doğum Günü",
      city: "Ankara",
      cityStrong: "İkamet Şehri",
      education: "Hacettepe Ünv.  Biyoloji Lisans, 2016",
      educationStrong: "Eğitim",
      role: "Ön Yüz, UI",
      roleStrong: "Tercih Ettiği Rol",
      profileHeading2: "Profil",
      basicInformationHeading2: "Temel Bilgiler",
      aboutMeHeading3: "Hakkımda",
    }
  },
  img: "src/assets/profile.png",
  about1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
  about2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
};

export const projectsData = {
  en: [
    {
      title: "Workintech",
      description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      img: "src/assets/projects1.png",
      links: { site: "#", github: "#" }
    },
    {
      title: "Journey",
      description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      img: "src/assets/projects2.png",
      links: { site: "#", github: "#" }
    },
  ],
  tr: [{
    title: "Workintech",
    description: "Kullanıcılarınızın hangi çerezleri kabul edip reddedeceklerini seçmelerine olanak tanıyan, basit, özelleştirilebilir ve minimum kurulum gerektiren bir çerez eklentisidir. Bu eklenti, standart JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur. Git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
    img: "src/assets/projects1.png",
    links: { site: "#", github: "#" }
  },
  {
    title: "Yolculuk",
    description: "Kullanıcılarınızın hangi çerezleri kabul edip reddedeceklerini seçmelerine olanak tanıyan, basit, özelleştirilebilir ve minimum kurulum gerektiren bir çerez eklentisidir. Bu eklenti, standart JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur. Git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
    img: "src/assets/projects2.png",
    links: { site: "#", github: "#" }
  }]
};

export const contactData = {
  email: "almilascodes@gmail.com",
  socials: {
    twitter: "#",
    github: "#",
    linkedin: "#",
    instagram: "#"
  },
  en: {
    contactHeader: "Send me a message!",
    contactParagraph1: "Got a question or proposal, or just want",
    contactParagraph2: "to say hello? Go ahead.",
  },
  tr: {
    contactHeader: "Bana bir mesaj gönder!",
    contactParagraph1: "Eğer bir öneri ya da sorunuz varsa, ya da",
    contactParagraph2: "sadece meraba demek istersiniz belki.",
  }
};

export const toastData = {
  tr: {
    darkOn: "🌙 Dark Mode Açıldı!",
    darkOff: "☀️ Light Mode Açıldı!",
    langText: "🇹🇷 Dil Türkçe oldu!",},
  en: {
    darkOn: "🌙 Dark Mode is On!",
    darkOff: "☀️ Light Mode is On!",
    langText: "🇬🇧 Switched to English!"},
}