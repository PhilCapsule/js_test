let episode = {
    title: "rocky",
    duration: "120",
    hasBeenWatched: true
}

document.querySelector('#episode-info').innerText = 
`Episode: ${episode.title}
Duration: ${episode.duration} minutes
${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`


document.querySelector('#cut').innerText = 
`Films: ${episode.title} 
durée: ${episode.duration} min
${episode.innerText ? 'Ok j\'ai déjà vu' : 'Non j\'ai pas vu'}`








