// import img1 from '$lib/assets/Workshop/pcb.jpg'
// import img2 from '$lib/assets/Workshop/ui.jpg'
// import img3 from '$lib/assets/Workshop/appdev.jpg'
// import img4 from '$lib/assets/Workshop/fusion_360.png'
// import img5 from '$lib/assets/Workshop/ml.png'
// import img6 from '$lib/assets/Workshop/Iot.png'

import type { workshop } from '$lib/types'


export let workshops:{[id: string]:workshop} = {
    "WP01": {
        name:"PCB Design Workshop",
        "trainee":[], 
        "date":"SEP 28,29",
        "venue":"IIT PKD Nila samgatha 30x and electronics lab",
        "description":"Hello, Ignited Minds! Many of you are familiar with the Arduino UNO, a versatile tool for creating projects from basic to advanced levels. But have you ever considered building your own Arduino UNO? Imagine customizing its features to suit your specific needs and becoming the creator of your own microcontroller. That’s exactly what we’ve planned for you in this workshop—an opportunity to design and build your very own Arduino UNO!",
        "prerequisites":[`Just a curiosity mind to learn!`,`A laptop with kicad software installed Link to download: https://www.kicad.org/download/`],
        "topics":["PCB"],
        "image":"",
        "price":1099
    },
    "WP02": {
        "name":"Introduction to UI/UX Design",
        "trainee":[], 
        "date":"SEP 28,29",
        "venue":"Sahyadri Campus A01-007 auditorium",
        "description":"Hello, Creative Thinkers! Have you ever wondered what makes a website or app user-friendly and visually appealing? User Interface (UI) and User Experience (UX) design are the keys to crafting digital experiences that not only look great but also work seamlessly. In this workshop, you'll dive into the principles of good design, learn how to create intuitive interfaces, and explore the importance of user feedback. But that's not all! You'll also get hands-on experience with designing your own UI/UX project, putting theory into practice.",
        "prerequisites":["A laptop with a mouse","Curiosity and a passion for design!"],
        "topics":["UI/UX"],
        "image":"",
        "price":1199
    },
    "WP03": {
        "name":"App Development Workshop",
        "trainee":[], 
        "date":"SEP 28,29",
        "venue":"Sahyadri Campus A01-002",
        "description":"Hey, Future App Developers!  Ever dreamed of creating your own app from scratch? Join our interactive workshop to dive into app development using React Native and JavaScript. Whether you’re new to app development or looking to enhance your skills, this hands-on session is perfect for you. By the end of the workshop, you'll have built your very own Pokedex from scratch and even set up your own server! Get ready for an exciting journey into app development!",
        "prerequisites":["A Laptop (optional: with Android Studio)","Basic Programming Skills"],
        "topics":["App Dev","React-Native"],
        "image":"",
        "price":1199
    },
    "WP04": {
        "name":"Fusion 360 Workshop",
        "trainee":[], 
        "date":"SEP 28,29",
        "venue":"Sahyadri Campus Computer Lab",
        "description":" Hello, Aspiring Engineers and Designers! Ready to revolutionize your approach to design and manufacturing? This hands-on, immersive workshop will transform your skills in Fusion CAD \
 and Generative Design. \
 Explore key concepts like sketching, modeling, drafting, and assembly. You’ll master advanced \
 tools and techniques in Fusion CAD and unlock the potential of generative design to optimize \
 your creations like never before. \
 By the end of this workshop, you’ll have practical experience in developing intricate designs and \
 assemblies, along with a comprehensive understanding of how generative design can drive \
 innovation in your projects. Get ready to elevate your design skills to the next level!",
        "prerequisites":["Basic familiarity with Fusion CAD or any design software https://www.autodesk.com/learn/ondemand/course/learn-fusion-for-cad-in-90-minutes " ],
        "topics":["Fusion 360"],
        "image":"",
        "price":999
    },
    "WP05": {
        "name":"ML & Neural Networks",
        "trainee":["Mathlab Research"], 
        "date":"SEP 28,29",
        "venue":"Nila Campus Samgatha 203",
        "description":"Ready to supercharge your career in Machine Learning and AI? This workshop is your fast-track ticket! Learn the core concepts and hottest techniques driving innovation today. We’ll break down complex topics like linear algebra, calculus, and probability, making them easy to understand and fun to apply. You'll master ML models, dive into cutting-edge Neural Networks, and explore the latest AI trends through real-world case studies. Plus, get exclusive access to industry experts in our live Q&A. Whether you're just starting or looking to level up, this workshop will ignite your AI potential!",
        "prerequisites":["Basic Knowledge in Python" , "A Laptop"],
        "topics":["Ml & Neural Networks"],
        "image":"",
        "price":1199
    },
    "WP06": {
        "name":"Internet of Things",
        "trainee":["Dr. Gangireddy Narendra Kumar Reddy"], 
        "date":"SEP 28,29",
        "venue":"",
        "description":" Are you excited about building smart devices and exploring the power of artificial intelligence? This hands-on workshop is perfect for you! Learn to build smart, connected devices using Arduino and take your projects further by deploying machine learning models on Raspberry Pi. With step-by-step guidance, you'll gain practical skills in creating IoT systems, automating devices, and using AI for real-time data processing. Onthe first day, we'll delve into the world of Arduino IoT, learning about its fundamentals, components, and programming basics. In the afternoon, you'll get hands-on by creating simple IoT projects using Arduino. Onthe second day, we'll shift our focus to Raspberry Pi, understanding its setup and exploring  the concepts of deep learning. The afternoon will be dedicated to practical experience, where you'll implement deep learning models on Raspberry Pi and explore real-world applications.",
        "prerequisites":["Basic Knowledge of Python Programming" , "A Laptop"],
        "topics":["IOT"],
        "image":"",
        "price":1199
    },

}
