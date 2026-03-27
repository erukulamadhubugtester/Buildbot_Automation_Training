let post = {
    title: "Learn JavaScript",
    body: "JavaScript is easy",
    author: "Madhu",
    views: 100,
    comments: [
        { author: "madhu", body: " test" },
        { author: "jagadesh", body: " qa  test" }
    ],
    isPublished: true
};

// Constructor function 
function Random_post(title,body,author){ // view,comments ,ispublished  no paras - its default 
    this.title=title;
    this.body=body;
    this.author=author;
    this.views = 0;           // default - New 
    this.comments = [];       // empty array - New 
    this.isPublished = false; // default
}
let data=new Random_post("test","hello","madhu")
data.views=1000;
data.comments=[user="m",info="post"]
console.log(data)
