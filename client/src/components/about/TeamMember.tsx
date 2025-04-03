import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import { TeamMember as TeamMemberType } from "@/data/team";

interface TeamMemberProps {
  member: TeamMemberType;
  index: number;
}

const TeamMember = ({ member, index }: TeamMemberProps) => {
  const { name, title, bio, imageUrl, socialLinks } = member;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg h-full">
        <div className="h-60 w-full">
          <img className="h-full w-full object-cover" src={imageUrl} alt={name} />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-purple-600 font-medium mb-3">{title}</p>
          <p className="text-gray-600 mb-4">
            {bio}
          </p>
          <div className="flex space-x-3">
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} className="text-gray-400 hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} className="text-gray-400 hover:text-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamMember;
