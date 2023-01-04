puts"destroying all previous seeds"
User.destroy_all
Discussion.destroy_all
Comment.destroy_all
puts"seeds destroyed"

puts"creating user seeds"
u1 = User.create({username: "matt", password: "12345", specialty: "Audio Engineering"})
u2 = User.create({username: "max", password: "678910", specialty: "Keyboard, Electric Bass"})
u3 = User.create({username: "james", password: "111213", specialty: "Music God"})
puts"finished creating user seeds"

puts"creating discussion topic"
d1 = Discussion.create({name_of_topic:"Gear for sale"})
d2 = Discussion.create({name_of_topic:"Live sound engineer"})
d3 = Discussion.create({name_of_topic:"Guitarist needed"})
puts"finished creating discussioin topic"

puts"creating comment"
Comment.create({post: "I have a Neumann u87 for sale! Only $1000", user_id: u1.id, discussion_id: d1.id})
Comment.create({post: "Nord Stage 1 for sale $850, this keyboard is old, but still super solid", user_id: u2.id, discussion_id: d1.id})
Comment.create({post: "Selling a Ampeg head, vintage, used by Zeppelin", user_id: u3.id, discussion_id: d1.id})
Comment.create({post: "I have an 18 channel Mackie for sale", user_id: u1.id, discussion_id: d1.id})

Comment.create({post: "Can track at my home studio... up to a 6 piece group", user_id: u1.id, discussion_id: d2.id})
Comment.create({post: "I do bar gigs and Bar Mitzvahs", user_id: u2.id, discussion_id: d2.id})
Comment.create({post: "I will play keys on studio sessions", user_id: u3.id, discussion_id: d2.id})

Comment.create({post: "Have been shredding my archtop for years. Hit me up if you want a blues screamer", user_id: u3.id, discussion_id: d3.id})
Comment.create({post: "Have been shredding my archtop for years. Hit me up if you want a blues screamer", user_id: u3.id, discussion_id: d3.id})
Comment.create({post: "Looking for a hair metal guitarist for studio album. 4 hours $35/hr", user_id: u2.id, discussion_id: d3.id})
puts "✅ Done seeding!"
