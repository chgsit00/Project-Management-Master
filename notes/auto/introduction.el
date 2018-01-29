(TeX-add-style-hook
 "introduction"
 (lambda ()
   (add-to-list 'LaTeX-verbatim-environments-local "lstlisting")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "lstinline")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "lstinline")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (TeX-run-style-hooks
    "/Users/dennismuller/dotfiles/articleLatexConfig")
   (LaTeX-add-labels
    "sec:org2cca239"
    "sec:org995f6be"
    "sec:org1572fea"
    "sec:orga56d5bb"
    "sec:orgcc88507"
    "sec:orgbce2240"
    "sec:org6de4d3a"
    "sec:orgf4620bb"
    "sec:org3063db6"))
 :latex)

