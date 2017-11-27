"use strict"
$(document).ready(function() {

  let postsUrl = 'https://raw.githubusercontent.com/Saori-hayalab/SaoriBlog/master/posts.json';
  let $postsDiv = $('#container');
  let numberOfPost = 1

  $.get(postsUrl)
      .done(function(data) {
        console.log('data:', data);
        let posts = JSON.parse(data);
        for (let post of posts) {
        // let $post = $(".post-container").first().clone(true, true);
        // numberOfPost = numberOfPost + 1; 
        // $pictureContainer.attr("id", "pictureContainer1" + numberOfPhotos);
          let $postContainer = $("#post-container")
          let $post = $postsDiv.append($postContainer);
          
          
          let $title = $('<h2>');
          $title.text(post.title);
          $post.append($title);
          
          let $PostDate = $('<h5>')
          $title.text(post.PostedMonth);
          $post.append($PostDate);
          

          let $content = $('<p>');
          $content.text(post.content);
          $post.append($content);
         
          let $picture = $('<img>');
          $picture.attr("src",post.picture);
          $post.append($picture);
          
        //   let $tag = $("<a>").append("11月")
        //   $tag.attr("href",post.picture);
        //   $post.append($tag);
          

          $postsDiv.append($post);
        }
      })
      .fail(function(err) {
        console.log('There was an error fetching posts:', err);
      });

});