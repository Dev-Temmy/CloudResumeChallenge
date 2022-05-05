$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["I can use many DevOps tools such as Team City and Octopus Deploy- for Continuous Integration of Code builds and continuous deployment of codes and releases, Seq and Amazon CloudWatch for logging, Grafana and PagerDuty- for monitoring of web apps and environments(uat, dev, non-prod and prod), AWS CloudFormation and Terraform for writing and deploying infrastructure as codes, Jira and Discord for communication and collaborations with teams through agile methodology, Docker for packing applications into containers and AWS services such as AWS Fargate, Amazon ECS, Amazon ECR to run, manage and backup Docker containers at scale and many others..............."],
        typeSpeed: 15,
        backSpeed: 5,
        loop: false
    });

    var typed = new Typed(".typing-2", {
        strings: ["I have hands-on experience in cloud computing, which includes configuring, monitoring, and supporting core AWS services such as ELB, EC2, S3, IAM, VPC, Lambda, Cloud Formation, RDS, CloudWatch, and Route 53. In addition, I have created and deployed a website using AWS CloudFormation Stack, terraform, SQL, Nodejs, and many other technologies."],
        typeSpeed: 30,
        backSpeed: 5,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});