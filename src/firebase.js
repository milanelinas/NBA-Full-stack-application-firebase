import * as firebase from 'firebase'; 

const config = {
    apiKey: "AIzaSyCwBNVyBCuub7eloI-EimGj-0TOl6CuXws",
    authDomain: "nba-react-3aa84.firebaseapp.com",
    databaseURL: "https://nba-react-3aa84.firebaseio.com",
    projectId: "nba-react-3aa84",
    storageBucket: "nba-react-3aa84.appspot.com",
    messagingSenderId: "756395302829"
  };

  firebase.initializeApp(config);  

  const firebaseDB = firebase.database(); 

  const firebaseArticles = firebaseDB.ref('articles'); 
  const firebaseTeams = firebaseDB.ref('teams'); 
  const firebaseVideos = firebaseDB.ref('videos'); 

  const firebaseLooper = (snapshot) => { 
    const data = []; 
                snapshot.forEach((childSnapshot) => { 
                    data.push({ 
                        ...childSnapshot.val(), 
                        id:childSnapshot.key
                    })
                });
                return data; 
  }


  export { 
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseVideos, 
      firebaseTeams,
      firebaseLooper
  }

