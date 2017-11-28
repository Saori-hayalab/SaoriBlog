"use strict"
$(document).ready(function() {

  let postsUrl = 'https://raw.githubusercontent.com/Saori-hayalab/SaoriBlog/master/posts.json';
  let $postsDiv = $('#container');
  // let numberOfPost = 1

  $.get(postsUrl)
      .done(function(data) {
        console.log('data:', data);
        //Classの形で抽出したい
        // let $postContainer = $(".post-container");
        // let $container = $('#container');
        // let $container.append($postContainer);
       
        let posts = JSON.parse(data);
        for (let post of posts) {
        // let $post = $(".post-container").first().clone(true, true);
        // numberOfPost = numberOfPost + 1; 
        // $pictureContainer.attr("id", "pictureContainer1" + numberOfPhotos);
        // let $postContainer = (".post-container").second();
        
        let posts = JSON.parse(data);
        for (let post of posts) {
          let $post = $('<div>');
          　
          let $title = $('<h2>');
          $title.text(post.title);
          $post.append($title);
          
          let $PostDate = $('<h5>');
          $PostDate.text(post.Date);
          $post.append($PostDate);
          

          let $content = $('<p>');
          $content.text(post.content);
          $post.append($content);
         
          let $picture = $('<img>');
          $picture.attr("src",post.picture);
          $post.append($picture);

          $postsDiv.append($post);
        
        }
      })
      
      .fail(function(err) {
        console.log('There was an error fetching posts:', err);
      });

});