package com.quiz.card.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;
import java.io.IOException;

@Controller
public class RouterController {

    @Value("classpath:static/index.html")
    private Resource indexHtml;

    @GetMapping(value = "/**")
    public String frontendRoutes(HttpServletRequest request) throws IOException {
        String path = request.getRequestURI();
        if (path.startsWith("/api/")) {
            return "forward:" + path;
        }
        return "forward:/";
    }

    @GetMapping("/")
    public Resource getIndexHtml() {
        return indexHtml;
    }
}
