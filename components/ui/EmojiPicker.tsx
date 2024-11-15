"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void
  selectedEmoji?: string
}

export function EmojiPicker({ onEmojiSelect, selectedEmoji }: EmojiPickerProps) {
  return (
    <Card className="emoji-picker absolute bottom-20 right-4 w-[320px] p-4 shadow-lg bg-white rounded-lg border z-50">
      <div className="mb-2 pb-2 border-b">
        <h4 className="text-sm font-medium text-gray-500">Emojis</h4>
      </div>
      
      <div className="h-[200px] overflow-y-auto">
        <div className="grid grid-cols-8 gap-1">
          {[
            // Smileys & Emotion
            "😀", "😃", "😄", "😁", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘",
            "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🤩", "🥳", "😏",
            "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠",
            
            // Gestures & People
            "👋", "🤚", "✋", "🖐️", "👌", "🤌", "🤏", "✌️", "🤞", "🫰", "🤟", "🤘", "🤙", "👈", "👉", "👍",
            "👎", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💪", "🦾", "🫂", "🧑", "👶",
            
            // Nature & Animals
            "🌺", "🌸", "💐", "🌷", "🌹", "🌻", "🌼", "🌱", "🪴", "🌲", "🌳", "🌴", "🍀", "🍁", "🐶", "🐱",
            "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🐔", "🦄", "🦋",
            
            // Food & Drink  
            "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🫐", "🍒", "🥝", "🍅", "🥑", "🥦", "🥨", "🍩",
            "🍪", "🎂", "🍰", "🧁", "🥧", "🍫", "🍭", "🍡", "☕", "🧃", "🥤", "🧋", "🍵", "🍶", "🥛", "🍼",
            
            // Activities & Objects
            "⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🎱", "🎮", "🎲", "♟️", "🎭", "🎨", "🎬", "🎤", "🎧",
            "🎵", "🎶", "🎹", "🪗", "🎸", "🎺", "📱", "💻", "⌚", "📷", "💡", "🔋", "📚", "✏️", "📍", "🎈",
            
            // Hearts & Symbols
            "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "💯", "✨", "⭐", "🌟", "💫", "🌈", "☀️",
            "🌤️", "⛅", "🌥️", "☁️", "🌦️", "⛈️", "🌧️", "💧", "💦", "🌊", "🎯", "🔮", "🎪", "🎠", "🎡", "🎢"
          ].map((emoji) => (
            <Button
              key={emoji}
              variant="ghost"
              size="sm"
              onClick={() => onEmojiSelect(emoji)}
              className={`hover:bg-gray-100 p-1 h-8 w-8 ${selectedEmoji === emoji ? "bg-gray-200" : ""}`}
            >
              <span className="text-lg">{emoji}</span>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  )
}
