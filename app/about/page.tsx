import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

export default function AboutUs() {
  return (
    <section className="about-us py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About EcoStore</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>At EcoStore, we're committed to providing high-quality, sustainable products that help reduce environmental impact. Our mission is to make eco-friendly living accessible and enjoyable for everyone.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Founded in 2020, EcoStore began as a small passion project and has since grown into a leading online retailer of sustainable goods. Our journey is driven by the belief that small changes can make a big difference.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Sustainability: We prioritize eco-friendly materials and processes.</li>
                <li>Quality: We believe sustainable products should also be durable and effective.</li>
                <li>Transparency: We're open about our sourcing and manufacturing processes.</li>
                <li>Innovation: We constantly seek new ways to reduce environmental impact.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We're dedicated to minimizing our carbon footprint. This includes using recycled packaging, partnering with eco-conscious suppliers, and offsetting our carbon emissions through verified environmental projects.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our diverse team of environmentalists, designers, and tech experts work together to bring you the best in sustainable products. We're united by our passion for the planet and our desire to make a positive impact.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Join Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>By choosing EcoStore, you're not just buying a product – you're joining a community of like-minded individuals committed to creating a more sustainable future. Every purchase makes a difference.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

