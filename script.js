const teamData = {
    'member1': {
        name: 'Elli Hanson',
        title: 'Principal Investor',
        bio: 'Lorem ipsum dolor sit amet consectetur. Enim blandit odio neque vel pellentesque. Vitae felis id sed natoque ornare eget mi tempus. Lectus tristique risus scelerisque sed etiam.',
        image: "/images/img1.png",
        linkedin: 'https://linkedin.com/in/username',
        tags: ['Design', 'Marketing', 'Consumer', 'Product']
    },
    'member2': {
        name: 'John Smith',
        title: 'Investment Partner',
        bio: 'Lorem ipsum dolor sit amet consectetur. Enim blandit odio neque vel pellentesque.',
        image: "/images/img2.png",
        linkedin: 'https://linkedin.com/in/johnsmith',
        tags: ['Finance', 'Strategy', 'Investment']
    },
    'member3': {
        name: 'Sarah Johnson',
        title: 'Technology Lead',
        bio: 'Lorem ipsum dolor sit amet consectetur. Vitae felis id sed natoque ornare eget.',
        image: "/images/img3.png",
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        tags: ['Technology', 'Innovation', 'Development']
    },
    'member4': {
        name: 'Michael Brown',
        title: 'Operations Director',
        bio: 'Lorem ipsum dolor sit amet consectetur. Lectus tristique risus scelerisque sed.',
        image: "/images/img4.png",
        linkedin: 'https://linkedin.com/in/michaelbrown',
        tags: ['Operations', 'Management', 'Strategy']
    },
    'member5': {
        name: 'Emma Wilson',
        title: 'Investment Analyst',
        bio: 'Lorem ipsum dolor sit amet consectetur. Enim blandit odio neque vel.',
        image: "/images/img5.png",
        linkedin: 'https://linkedin.com/in/emmawilson',
        tags: ['Analysis', 'Research', 'Finance']
    },
    'member6': {
        name: 'David Lee',
        title: 'Portfolio Manager',
        bio: 'Lorem ipsum dolor sit amet consectetur. Vitae felis id sed natoque.',
        image: "/images/img6.png",
        linkedin: 'https://linkedin.com/in/davidlee',
        tags: ['Portfolio', 'Investment', 'Strategy']
    },
    'member7': {
        name: 'Lisa Chen',
        title: 'Research Director',
        bio: 'Lorem ipsum dolor sit amet consectetur. Lectus tristique risus.',
        image: "/images/img7.png",
        linkedin: 'https://linkedin.com/in/lisachen',
        tags: ['Research', 'Analysis', 'Strategy']
    },
    'member8': {
        name: 'James Wilson',
        title: 'Growth Specialist',
        bio: 'Lorem ipsum dolor sit amet consectetur. Enim blandit odio.',
        image: "/images/img8.png",
        linkedin: 'https://linkedin.com/in/jameswilson',
        tags: ['Growth', 'Strategy', 'Marketing']
    }
};

document.querySelectorAll('.team-members img').forEach((img, index) => {
    img.addEventListener('click', function() {
        const memberId = this.dataset.member;
        const member = teamData[memberId];
        
        if (!member) {
            console.error('No member data found for:', memberId);
            return;
        }

        // Truncate bio to 400 characters if needed
        const truncatedBio = member.bio.length > 400 
            ? member.bio.substring(0, 397) + '...' 
            : member.bio;

        document.getElementById('modalImage').src = member.image || this.src;
        document.getElementById('modalName').textContent = member.name;
        document.getElementById('modalTitle').textContent = member.title;
        document.getElementById('modalBio').textContent = truncatedBio;
        document.getElementById('modalLinkedIn').href = member.linkedin;
        
        const tagsContainer = document.getElementById('modalTags');
        tagsContainer.innerHTML = member.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');
        
        document.getElementById('bioModal').classList.add('active');
    });
});

// Close modal when clicking outside
document.getElementById('bioModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
}); 