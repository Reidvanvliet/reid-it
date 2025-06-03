if(postJson.data.preview) {
      post.img = postJson.data.preview.images[0].source.url
    } else if(postJson.data.media_metadata) {
      const imagesArray = [];
      const imageObjects = Object.values(postJson.data.media_metadata);
      imageObjects.map((obj) => {
        imagesArray.push(obj.s.u);
      })
    }