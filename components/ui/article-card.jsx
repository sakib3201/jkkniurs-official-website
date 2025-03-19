import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { format } from "date-fns"
import Image from "next/image"

export function ArticleCard({ article }) {
  // Parse the date string into a Date object
  const date = new Date(article.date)
  
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
      <img 
          src={article.coverImage} 
          alt={article.title}
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="bg-slate-50">
            {article.category}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {format(date, 'MMM d, yyyy')}
          </span>
        </div>
        <Link href={`/articles/${article.slug}`} className="group">
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">By {article.author}</p>
        <p className="line-clamp-3 text-muted-foreground mt-3">
          {article.excerpt}
        </p>
      </CardHeader>
      <CardFooter>
        <Link 
          href={`/articles/${article.slug}`}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Read more →
        </Link>
      </CardFooter>
    </Card>
  )
}