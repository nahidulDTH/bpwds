const jsondata =  {
    "date":"__ 8 July 2024",
    "maintitle":"ভবানিপুর-পশ্চিমপাড়া-মাদ্রাসা",
    "name":"ভবানীপুর পশ্চিমপাড়া ফুল্কানিয়া মাদ্রাসা",
    "paragrap":"এই মাদ্রাসা ভবানীপুর ১ম ভ্যান গ্যারেজ এর সাথেই আবস্তিত । মাদ্রাসাই ছাত্র-ছাত্রী একসঙ্গে পরানো হয়। মাদ্রাসার শিক্ষক ইমাম <a href='https://www.facebook.com/hemdadul.hauqe' target='_blank'>মোহাম্মাদ এমদাদুল হক</a> ।মাদ্রাসাতে পরতে কোন টাকা বা চাঁদা দিতে হয় না । ০৫ থেকে ১৫ বছরএর শিশু মাদ্রসসা তে আরবি পড়ে। তবে এখানে কোন নিয়ম নেই । যে কোন বয়স এ এর ছাত্র-ছাত্রী পরতে পারবেন। <br>যারা ভবানীপুর পশ্চিমপাড়া ফুল্কানিয়া মাদ্রাসা এর দায়িত্ব তে আছেন -  ",
    "alllist":{
        "list2":"সভাপতি - মোহাম্মাদ আজিদ হোসেন <a href='tel:+8801758215375' target='_blank'> (০১৭৫৮২১৫৩৭৫)</a>",
        "list3":"ক্যাশিয়ার - মোহাম্মাদ মনির হোসেন মোবাইল নাম্বার <a href='tel:+8801718953884' target='_blank'>(০১৭১৮৯৫৩৮৮৪)</a> ও<br> মোহাম্মাদ আব্দুল কুদ্দুস মোবাইল নাম্বার <a href='tel:+8801715293509' target='_blank'>(০১৭১৫২৯৩৫০৯)</a>"
    },
    "photo":"/data/photo/demoimg.png",
    "map":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1065.0817332965223!2d89.42630226962429!3d24.04601899865437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDAyJzQ1LjciTiA4OcKwMjUnMzcuMCJF!5e1!3m2!1sbn!2sbd!4v1720429864176!5m2!1sbn!2sbd"
};

   // Display data in HTML
   document.getElementById('date').textContent = jsondata.date;
   document.getElementById('maintitle').textContent = jsondata.maintitle;
   document.getElementById('name').textContent = jsondata.name;
   document.getElementById('paragrap').innerHTML = jsondata.paragrap;

   // Loop through alllist object and create list items dynamically
   const alllistElement = document.getElementById('alllist');
   for (const key in jsondata.alllist) {
       if (jsondata.alllist.hasOwnProperty(key)) {
           const listItem = document.createElement('li');
           listItem.innerHTML = jsondata.alllist[key];
           alllistElement.appendChild(listItem);
       }
   }

   // Display the photo
   document.getElementById('photo').src = jsondata.photo;
   document.getElementById('map').src = jsondata.map;

