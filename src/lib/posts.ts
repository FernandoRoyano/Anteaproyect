// src/lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  category?: string;  // ✅ AÑADIDO
  author?: string;    // ✅ AÑADIDO
  content: string;
  readingTime?: number; // ✅ AÑADIDO para el blog mejorado
}

export function getAllPosts(): Post[] {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      image: data.image || '',
      category: data.category || 'General', // ✅ AÑADIDO
      author: data.author || 'Equipo ANTEA', // ✅ AÑADIDO
      content,
    };
  });
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    image: data.image || '',
    category: data.category || 'General', // ✅ AÑADIDO
    author: data.author || 'Equipo ANTEA', // ✅ AÑADIDO
    content,
  };
}
