//Fetch options
// function createPost(post) {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: post.title,
//       body: post.body
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//       token: 'WORD@$7X'
//     }
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// createPost({ title: 'Post-1', body: 'This is the body of Post-1' });

const sendDataToServer = (post) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: post.title,
      body: post.body
    }),
    headers: {
      'Content-Type': 'application/json',
      token: 'Haridwar024'
    }
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data));
};

sendDataToServer({ title: 'Day-11', body: 'Daily Progess Update' });
