const posts = [
  {
    id: 1,
    title: 'Boardroom Readiness: Legal Checks Before Signing a Strategic Acquisition',
    excerpt: 'A practical framework for legal due diligence, liability mapping, governance safeguards, and post-close integration clauses that reduce dispute exposure.',
    category: 'Corporate',
    date: 'May 10, 2026',
    readTime: '7 min read',
    featured: true
  },
  {
    id: 2,
    title: 'When Litigation Is Inevitable: Building a Defensible Evidence Timeline',
    excerpt: 'Document preservation, witness coordination, and communication protocols that strengthen your litigation posture from day one.',
    category: 'Litigation',
    date: 'May 7, 2026',
    readTime: '6 min read',
    featured: false
  },
  {
    id: 3,
    title: 'Commercial Leasing in 2026: Clauses That Matter in Volatile Markets',
    excerpt: 'How to negotiate escalation, force majeure, assignment, and remedy provisions in commercial lease agreements.',
    category: 'Real Estate',
    date: 'May 5, 2026',
    readTime: '5 min read',
    featured: false
  },
  {
    id: 4,
    title: 'Trademark Hygiene: How Mid-Size Companies Lose Protectable Value',
    excerpt: 'An institutional checklist to maintain enforceability, prevent dilution, and align trademark practices with expansion plans.',
    category: 'Intellectual Property',
    date: 'May 2, 2026',
    readTime: '4 min read',
    featured: false
  },
  {
    id: 5,
    title: 'Internal Investigations: Preserving Privilege and Decision Integrity',
    excerpt: 'A structured approach to conducting sensitive internal investigations while retaining legal privilege and minimizing collateral risk.',
    category: 'Compliance',
    date: 'April 29, 2026',
    readTime: '8 min read',
    featured: false
  },
  {
    id: 6,
    title: 'Settlement Strategy: Quantifying Litigation Risk for Executive Decisions',
    excerpt: 'How executive teams can evaluate settlement windows with scenario modeling, legal cost forecasting, and reputational analysis.',
    category: 'Litigation',
    date: 'April 25, 2026',
    readTime: '6 min read',
    featured: false
  }
]

const feedGrid = document.getElementById('feedGrid')
const searchInput = document.getElementById('searchInput')
const categorySelect = document.getElementById('categorySelect')
const emptyState = document.getElementById('emptyState')

function createPostCard(post) {
  const article = document.createElement('article')
  article.className = `post-card${post.featured ? ' featured' : ''}`

  article.innerHTML = `
    <div class="post-meta">
      <span class="chip category">${post.category}</span>
      <span class="chip readtime">${post.readTime}</span>
      <span class="post-date">${post.date}</span>
    </div>
    <h2 class="post-title">${post.title}</h2>
    <p class="post-excerpt">${post.excerpt}</p>
    <a class="post-link" href="#" aria-label="Read article: ${post.title}">
      Read article
      <span>→</span>
    </a>
  `

  return article
}

function filterPosts() {
  const keyword = searchInput.value.trim().toLowerCase()
  const category = categorySelect.value

  return posts.filter((post) => {
    const matchesKeyword =
      post.title.toLowerCase().includes(keyword) ||
      post.excerpt.toLowerCase().includes(keyword) ||
      post.category.toLowerCase().includes(keyword)

    const matchesCategory = category === 'all' || post.category === category

    return matchesKeyword && matchesCategory
  })
}

function renderFeed() {
  const filtered = filterPosts()
  feedGrid.innerHTML = ''

  if (!filtered.length) {
    emptyState.hidden = false
    return
  }

  emptyState.hidden = true

  filtered
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .forEach((post) => {
      feedGrid.appendChild(createPostCard(post))
    })
}

searchInput.addEventListener('input', renderFeed)
categorySelect.addEventListener('change', renderFeed)

renderFeed()
