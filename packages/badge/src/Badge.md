```
{
    "category": "communication",
    "type": "Badges",
    "description": "Badges show notifications, counts, or status information on navigation items and icons",
    "background": "https://lh3.googleusercontent.com/SbfJkqCuhH9KK57Cqw5BrZygNM7LDtRT4k9AT908MKQmnp7-9r0PsUQSyQnLHGXWIvEB4zQ-TxVcP9VZ2zXegYKch06kK5Df5XwfZfUG_qS9eIP_Qg=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/138cg9bs39LdBjJrmPJ5t1gQQcQPbgWuRAe8yGQYOl7xVrP_1NaemHDFYBxGqQvZOCHe2eQ4m01VVYZK4kNk9OuiqYqDGTybgI-lFtkXj8g1Nu9BLbQ=w1200"
}
```

```tsx
import {VStack, Badge} from "@znui/react";

<VStack spacing={5}>
    <Badge/>
    <Badge size="single">3</Badge>
    <Badge size="multiple">32</Badge>
</VStack>
```