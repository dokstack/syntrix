# Syntrix VS Code Extension

## Features
- Simple and intuitive syntax for defining web pages, cards, text, buttons, inputs, and more
- Compiles Syntrix code directly to HTML and CSS
- Syntax highlighting in VS Code for .sx files
- Customizable styles and properties for Syntrix elements

## Installation
1. Open Visual Studio Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type "Extensions: Install from VSIX" and press Enter
4. Select the `syntrix-0.0.1.vsix` file you generated 
5. The Syntrix extension will now be installed and ready to use

## Usage
To use the Syntrix extension, create a new file with the `.sx` extension. You can then start writing Syntrix code, which will be automatically highlighted and styled.

Here's an example Syntrix code:

```sx
>> page login
    :: display = flex
    :: justify-content = center
    :: padding = 40px

    >> card loginForm
        :: background = white
        :: padding = 20px
        :: border-radius = 8px
        :: width = 300px

        >> text title
            :: font-size = 24px
            :: margin-bottom = 20px

        >> input email
            :: width = 100%
            :: padding = 8px
            :: margin-bottom = 10px

        >> input password
            :: width = 100%
            :: padding = 8px
            :: margin-bottom = 15px

        >> button submit
            :: background = #007bff
            :: color = white
            :: padding = 10px 20px
            :: border = none
            :: width = 100%
    >> end
>> end
```

## Customization
You can customize the appearance and behavior of your Syntrix components by adjusting the various CSS-like properties available, such as display, padding, font-size, and more.

## Contributing
If you encounter any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request on the Syntrix project repository.

## License
This extension is licensed under the MIT License.
