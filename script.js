document.addEventListener('DOMContentLoaded', () => {
    const documentListDiv = document.getElementById('document-list');
   
        // Add more documents here with their names and URLs
    ];

    if (documents.length > 0) {
        const ul = document.createElement('ul');
        for (const doc of documents) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = doc.url;
            a.textContent = doc.name;
            a.target = '_blank';
            li.appendChild(a);
            ul.appendChild(li);
        }
        documentListDiv.appendChild(ul);
    } else {
        const p = document.createElement('p');
        p.textContent = 'No documents available yet.';
        documentListDiv.appendChild(p);
    }
});
